'use client';

import WheelOfFortune from './wheel';

interface LuckProps {}

const Luck: React.FC<LuckProps> = () => {
  return (
    <div className='max-w-[500px] w-full px-4 mx-auto flex flex-col py-8 text-center'>
      <h1>Win up to 200% extra in-store credit!</h1>
      <p>Spin the wheel</p>
      <WheelOfFortune />
    </div>
  );
};

export default Luck;
