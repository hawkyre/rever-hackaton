'use client';
import { ACTIONS } from '@/fsm';
import { useFSMCtx } from './fsmContext';

interface PositiveReturnOptionsProps {}

const PositiveReturnOptions: React.FC<PositiveReturnOptionsProps> = () => {
  const { fsm } = useFSMCtx();
  return (
    <div className='max-w-[500px] w-full px-4 mx-auto flex flex-col py-8'>
      <p className='text-gray-600 text-sm mb-16' onClick={() => fsm.goToAction(ACTIONS.RECOM_OTHER)}>&lt;- Back</p>
      <h1 className=''>Return method</h1>
      <p>Please select how you want to return your item</p>
      <div
        onClick={() => fsm.goToAction(ACTIONS.POSITIVE_CASHBACK_METHODS)}
        className='bg-gray-100 px-4 py-3 w-full rounded-lg  text-start flex justify-between mt-8 flex-col border-2 border-black'
      >
        <b>In-store exchange</b>
        <p className='text-amber-400 text-sm'>You'll get extra 5€</p>
        <p className='text-green-400 text-sm'>80% less CO2</p>
      </div>
      <div
        onClick={() => fsm.goToAction(ACTIONS.REVER_MARKETPLACE)}
        className='bg-[#188ffc] text-black px-4 py-3 w-full rounded-lg  text-start flex justify-between mt-2 flex-col'
      >
        <b>Sell through REVER marketplace</b>
        <p className="text-black/80 text-sm">
          Sell your items directly to other people, and help reduce the carbon
          footprint.
        </p>
      </div>
      <div  onClick={() => fsm.goToAction(ACTIONS.NEGATIVE_RETURN_OPTIONS)}
          className='bg-gray-100 px-4 py-3 w-full rounded-lg  text-start flex justify-between text-sm mt-2'
        >
          <p>I want to see other return methods</p>
          <p>-></p>
        </div>
    </div>
  );
};

export default PositiveReturnOptions;
