'use client';
import { ACTIONS } from '@/fsm';
import { useFSMCtx } from './fsmContext';

interface NegativeCashbackMethodsProps {}

const NegativeCashbackMethods: React.FC<NegativeCashbackMethodsProps> = () => {
  const { fsm } = useFSMCtx();
  
  return (
    <div className='max-w-[500px] w-full px-4 mx-auto flex flex-col py-8'>
      <p className='text-gray-600 text-sm mb-16' onClick={() => fsm.goToAction(ACTIONS.POSITIVE_CASHBACK_METHODS)}>&lt;- Back</p>
      <h1 className=''>Are you sure you want to exchange the item for cash?</h1>
      <p className='text-red-600 text-sm'>
        You can get 5€ extra if you exchange it for store credit.
      </p>
      <div
       onClick={() => fsm.goToAction(ACTIONS.POSITIVE_METHOD_CONFIRMATION)}
          className='bg-black text-gray-100 px-4 py-3 w-full rounded-lg  text-start flex justify-between text-sm mt-2'
        >
          <p>Get the extra store credit</p>
          <p>-></p>
        </div>
      <div
        onClick={() => fsm.goToAction(ACTIONS.LUCK)}
        className='bg-gray-100 px-4 py-3 w-full rounded-lg  text-start flex justify-between mt-8 flex-col border-2 border-black'
      >
        <b>Try my luck</b>
        <p className='text-gray-600 text-sm'>
          Spin the wheel and get a chance of getting FREE 200% extra in-store
          credit.
        </p>
      </div>
      <div
        onClick={() => fsm.goToAction(ACTIONS.CASH_RETURN_CONFIRMATION)}
        className='bg-gray-100 px-4 py-3 w-full rounded-lg  text-start flex justify-between text-sm mt-2'
      >
        <p>I don't want store credits, just cash.</p>
      </div>
    </div>
  );
};

export default NegativeCashbackMethods;
