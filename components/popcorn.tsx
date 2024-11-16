import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  ReactNode,
} from 'react';

// Types
interface ParticleProperties {
  id: string;
  x: number;
  y: number;
  initialX: number;
  velocityY: number;
  velocityX: number;
  rotation: number;
  rotationSpeed: number;
  gravity: number;
  friction: number;
  life: number;
  fadeSpeed: number;
  scale: number;
}

interface PopcornContextType {
  triggerPopcorn: (count?: number) => void;
}

interface PopcornProviderProps {
  children: ReactNode;
}

interface ParticleRendererProps {
  particle: ParticleProperties;
}

// Context with null check
const PopcornContext = createContext<PopcornContextType | null>(null);

// Particle class
class Particle implements ParticleProperties {
  id: string;
  x: number;
  y: number;
  initialX: number;
  velocityY: number;
  velocityX: number;
  rotation: number;
  rotationSpeed: number;
  gravity: number;
  friction: number;
  life: number;
  fadeSpeed: number;
  scale: number;

  constructor(x: number, y: number) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.x = x;
    this.y = y;
    this.initialX = x;
    this.velocityY = -(10 + Math.random() * 5);
    this.velocityX = -2 + Math.random() * 4;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = -2 + Math.random() * 4;
    this.gravity = 0.5;
    this.friction = 0.99;
    this.life = 1;
    this.fadeSpeed = 0.02;
    this.scale = 0.8 + Math.random() * 0.4;
  }

  update(): boolean {
    this.velocityY += this.gravity;
    this.velocityX *= this.friction;
    this.x += this.velocityX;
    this.y += this.velocityY;
    this.rotation += this.rotationSpeed;
    this.life -= this.fadeSpeed;
    return this.life > 0;
  }
}

const ParticleRenderer: React.FC<ParticleRendererProps> = ({ particle }) => {
  return (
    <div
      className='fixed text-2xl pointer-events-none select-none'
      style={{
        transform: `translate(${particle.x}px, ${particle.y}px) 
                   rotate(${particle.rotation}deg) 
                   scale(${particle.scale})`,
        opacity: particle.life,
        transition: 'opacity 0.1s linear',
      }}
    >
      🍿
    </div>
  );
};

export const PopcornProvider: React.FC<PopcornProviderProps> = ({
  children,
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  const updateParticles = useCallback((timestamp: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    const deltaTime = timestamp - lastTimeRef.current;
    lastTimeRef.current = timestamp;

    setParticles((prevParticles) => {
      const updatedParticles = prevParticles.filter((particle) =>
        particle.update()
      );

      console.log(updatedParticles, deltaTime);

      if (updatedParticles.length > 0) {
        animationFrameRef.current = requestAnimationFrame(updateParticles);
      } else {
        animationFrameRef.current = null;
      }

      return updatedParticles;
    });
  }, []);

  const triggerPopcorn = useCallback(
    (count: number = 10) => {
      const newParticles = Array.from({ length: count }, () => {
        const x =
          (typeof window !== 'undefined' ? 100 : 0) / 2 +
          (-100 + Math.random() * 200);
        const y = (typeof window !== 'undefined' ? 100 : 0) + 20;
        return new Particle(x, y);
      });

      setParticles((prev) => [...prev, ...newParticles]);

      if (!animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(updateParticles);
      }
    },
    [updateParticles]
  );

  React.useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <PopcornContext.Provider value={{ triggerPopcorn }}>
      {children}
      {particles.map((particle) => (
        <ParticleRenderer key={particle.id} particle={particle} />
      ))}
    </PopcornContext.Provider>
  );
};

export const usePopcorn = (): PopcornContextType => {
  const context = useContext(PopcornContext);
  if (context === null) {
    throw new Error('usePopcorn must be used within a PopcornProvider');
  }
  return context;
};
