'use client';

import { ACTIONS } from '@/fsm';
import { useFSMCtx } from './fsmContext';

interface HandleExchangeProps {}

const HandleExchange: React.FC<HandleExchangeProps> = () => {
  const { fsm } = useFSMCtx();
  return (
    <div className='max-w-[500px] w-full px-4 mx-auto flex flex-col gap-2 py-8'>
      <p
        className='text-gray-600 text-sm mb-16'
        onClick={() => fsm.goToAction(ACTIONS.RECOM_OTHER)}
      >
        &lt;- Back
      </p>
      <div className='w-full flex flex-col items-start'>
        <h1>Your selected exchange</h1>
        <p>You will get a discount code in the next step</p>
        <div className='flex flex-col gap-4 my-4'>
          <div className='border border-gray-300 shadow-md p-3 rounded-lg grid grid-cols-4 items-center gap-4'>
            <img
              src='/images/camverde.png'
              alt='Next.js logo'
              className='rounded-md'
            />
            <div className='col-span-3 flex flex-col justify-between h-full py-2'>
              <div>
                <p className='text-sm'>Camiseta corta adidas by Stella Mc...</p>
                <p className='text-xs text-gray-500'>XS | Black</p>
              </div>
              <div className='flex gap-2 items-center'>
                <span
                  className='text-lg text-gray-800'
                  style={{ textDecorationLine: 'line-through' }}
                >
                  90€
                </span>
                <span className='text-sm text-red-600'>
                  Only 5€ if you exchange
                </span>
              </div>
            </div>
          </div>
        </div>
        <h1 className='mt-8'>Exchange method</h1>
        <p>Please select how you want to return your item</p>
        <div
          onClick={() => fsm.goToAction(ACTIONS.EXCHANGE_CONFIRMATION)}
          className='bg-gray-100 px-4 py-3 w-full rounded-lg  text-start flex justify-between text-sm mt-2 font-bold flex-col gap-1'
        >
          <p>In-store exchange</p>
          <p className='text-green-400 text-sm'>80% less CO2</p>
        </div>
        <div
          className='bg-gray-100 px-4 py-3 w-full rounded-lg  text-start flex justify-between text-sm mt-2 font-bold'
          onClick={() => fsm.goToAction(ACTIONS.EXCHANGE_COURIER_CONFIRMATION)}
        >
          <p>Send by courier</p>
        </div>
      </div>
    </div>
  );
};

export default HandleExchange;
