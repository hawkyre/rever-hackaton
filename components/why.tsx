'use client';
import { ACTIONS } from '@/fsm';
import { Options } from './genericQuestion';
import { Adidas } from './svg/adidas';
import { useFSMCtx } from './fsmContext';

interface WhyProps {}

const options: Options[] = [
  {
    title: 'The size was wrong',
    to: ACTIONS.RECOM_COLOR,
  },
  {
    title: 'The color was wrong',
    to: ACTIONS.RECOM_OTHER,
  },
  {
    title: 'The item was damaged',
    to: ACTIONS.RECOM_OTHER,
  },
  {
    title: 'For another reason',
    to: ACTIONS.RECOM_OTHER,
  },
];
const Why: React.FC<WhyProps> = () => {
  const { fsm } = useFSMCtx();
  return (
    <div className='flex flex-col items-center py-8 max-w-[500px] w-full px-4 mx-auto'>
      <Adidas />

      <h1 className='mt-8'>What's the issue with this item?</h1>
      <p className='mb-4'>Choose an option</p>
      <div className='border border-gray-300 shadow-md p-3 rounded-lg grid grid-cols-4 items-center gap-4'>
        <img
          src='/images/camnegra.png'
          alt='Next.js logo'
          className='rounded-md'
        />
        <div className='col-span-3 flex flex-col justify-between h-full py-2'>
          <div>
            <p className='text-sm'>Camiseta corta adidas by Stella Mc...</p>
            <p className='text-xs text-gray-500'>XS | Black</p>
          </div>
          <p className='text-xs text-gray-800'>Order N. 86782382</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 w-full mt-6'>
        {options.map((option) => (
          <button
            className='bg-gray-100 px-4 py-3 w-full rounded-lg  text-start flex justify-between text-sm'
            key={option.title}
            onClick={() => fsm.goToAction(option.to)}
          >
            <b>{option.title}</b>
            <p>-></p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Why;
