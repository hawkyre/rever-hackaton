'use client';

import { ACTIONS } from '@/fsm';
import { useFSMCtx } from './fsmContext';

const HandleSizeExchange: React.FC = () => {
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
        <h1>Exchange method</h1>
        <p>Please select how you want to return your item</p>
        <div
          onClick={() => fsm.goToAction(ACTIONS.EXCHANGE_SIZE_CONFIRMATION)}
          className='bg-gray-100 px-4 py-3 w-full rounded-lg  text-start flex justify-between text-sm mt-2 font-bold flex-col gap-1'
        >
          <p>In-store exchange</p>
          <p className='text-green-400 text-sm'>80% less CO2</p>
        </div>
        <div
          className='bg-gray-100 px-4 py-3 w-full rounded-lg  text-start flex justify-between text-sm mt-2 font-bold'
          onClick={() => fsm.goToAction(ACTIONS.EXCHANGE_SIZE_CONFIRMATION)}
        >
          <p>Send by courier</p>
        </div>
      </div>
    </div>
  );
};

export default HandleSizeExchange;
