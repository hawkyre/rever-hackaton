import { useState } from 'react';
import { useFSMCtx } from './fsmContext';
import { ACTIONS } from '@/fsm';

const discounts = [
  '5%',
  '0%',
  '10%',
  '25%',
  '0%',
  '50%',
  '0%',
  '5%',
  '100%',
  '5%',
  '0%',
  '0%',
];

const WheelOfFortune = () => {
  const { fsm } = useFSMCtx();
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinned, setspinned] = useState(false);

  const getTargetRotation = () => {
    const extraSpins = 3 + Math.floor(Math.random() * 3);
    return 219 + 360 * extraSpins;
  };

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const targetRotation = getTargetRotation();

    setRotation((prev) => prev + targetRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setspinned(true);
    }, 3000);
  };

  return (
    <div className='flex flex-col items-center p-8'>
      <div className='relative'>
        <div
          className='relative w-96 h-96 rounded-full border-4 border-gray-300 bg-white'
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: 'transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)',
          }}
        >
          {/* Numbers */}
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className='absolute w-full h-full'
              style={{
                transform: `rotate(${i * 30 + 10}deg)`,
              }}
            >
              <div
                className='absolute top-8 left-1/2 -translate-x-1/2 font-bold text-gray-700'
                style={{
                  transform: `rotate(-${rotation + i * 30 + 10}deg)`,
                }}
              >
                {discounts[i]}
              </div>
            </div>
          ))}

          {/* Dividing lines */}
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={`line-${i}`}
              className='absolute w-[2px] h-1/2 bg-gray-300 origin-bottom'
              style={{
                left: 'calc(50% - 1px)',
                top: '0',
                transform: `rotate(${i * 30}deg)`,
              }}
            />
          ))}

          {/* Center point */}
          <div className='absolute top-1/2 left-1/2 w-4 h-4 -mt-2 -ml-2 bg-gray-700 rounded-full' />
        </div>

        {/* Pointer */}
        <div
          className='absolute left-1/2 -translate-x-1/2 w-4 h-8 bg-[#188ffc]'
          style={{
            top: '-16px',
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
          }}
        />
      </div>

      <button
        hidden={spinned}
        onClick={spinWheel}
        disabled={isSpinning}
        className='px-6 py-4 mt-8 bg-black disabled:bg-black/70 text-white rounded-lg disabled:cursor-not-allowed w-full'
      >
        {isSpinning ? 'Spinning...' : 'Spin Wheel'}
      </button>
      <p hidden={!spinned} className='mt-8 mb-4'>
        Sorry, you didn't get any credits!
      </p>
      <button
        hidden={!spinned}
        onClick={() => fsm.goToAction(ACTIONS.POSITIVE_CASHBACK_METHODS)}
        disabled={isSpinning}
        className='px-6 py-2  bg-black disabled:bg-black/70 text-white rounded-lg text-sm  disabled:cursor-not-allowed w-full'
      >
        Go back to the return methods (extra 5€)
      </button>
      <button
        hidden={!spinned}
        onClick={() => fsm.goToAction(ACTIONS.CASH_RETURN_CONFIRMATION)}
        disabled={isSpinning}
        className='mt-2 px-6 py-2  bg-gray-100 rounded-lg text-sm  disabled:cursor-not-allowed w-full'
      >
        Return the item for cash.
      </button>
    </div>
  );
};

export default WheelOfFortune;
