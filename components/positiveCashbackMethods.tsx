'use client';
import { ACTIONS } from '@/fsm';
import { useFSMCtx } from './fsmContext';

interface PositiveCashbackMethodsProps {}

const PositiveCashbackMethods: React.FC<PositiveCashbackMethodsProps> = () => {
  const { fsm } = useFSMCtx();
  return (
    <div className='max-w-[500px] w-full px-4 mx-auto flex flex-col py-8'>
      <p className='text-gray-600 text-sm mb-16' onClick={() => fsm.goToAction(ACTIONS.POSITIVE_RETURN_OPTIONS)}>&lt;- Back</p>
      <h1 className=''>Cashback method</h1>
      <p>Please select how you want to get your money back</p>
      <div
        onClick={() => fsm.goToAction(ACTIONS.POSITIVE_METHOD_CONFIRMATION)}
        className='bg-amber-400 px-4 py-3 w-full rounded-lg  text-start flex justify-between mt-8 flex-col border-2 border-black'
      >
        <b>Get 35€ in store credits</b>
        <p className='text-sm'>You'll get extra 5€</p>
      </div>
      <div
        onClick={() => fsm.goToAction(ACTIONS.VOUCHER_CONFIRMATION)}
        className='bg-gray-100 px-4 py-3 w-full rounded-lg  text-start flex justify-between mt-2 flex-col border-2 border-black'
      >
        <b>Get 30€ as a store voucher</b>
        <p className='text-gray-600 text-sm'>You can share this voucher with anyone</p>
      </div>
      <div  onClick={() => fsm.goToAction(ACTIONS.NEGATIVE_CASHBACK_METHODS)}
          className='bg-gray-100 px-4 py-3 w-full rounded-lg  text-start flex justify-between text-sm mt-2'
        >
          <p>Other cashback methods</p>
          <p>-></p>
        </div>
    </div>
    
  );
};

export default PositiveCashbackMethods;
