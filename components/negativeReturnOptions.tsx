'use client';
import { ACTIONS } from '@/fsm';
import { useFSMCtx } from './fsmContext';

interface NegativeReturnOptionsProps {}

const NegativeReturnOptions: React.FC<NegativeReturnOptionsProps> = () => {
  const { fsm } = useFSMCtx();

  return (
    <div className='max-w-[500px] w-full px-4 mx-auto flex flex-col py-8'>
      <p
        className='text-gray-600 text-sm mb-16'
        onClick={() => fsm.goToAction(ACTIONS.POSITIVE_RETURN_OPTIONS)}
      >
        &lt;- Back
      </p>
      <h1 className=''>What about these return options?</h1>
      <div
        onClick={() => fsm.goToAction(ACTIONS.POSITIVE_CASHBACK_METHODS)}
        className='bg-gray-100 px-4 py-3 w-full rounded-lg  text-start flex justify-between text-sm mt-8 flex-col gap-1'
      >
        <b>Return it through a courier</b>
        <p>You'll be charged a $3 fee</p>
      </div>
      <div
        onClick={() => fsm.goToAction(ACTIONS.POSITIVE_CASHBACK_METHODS)}
        className='bg-gray-100 px-4 py-3 w-full rounded-lg  text-start flex justify-between text-sm mt-2 flex-col gap-1'
      >
        <b>Return it through a post office</b>
        <p>You'll be in charge of sending the parcel.</p>
      </div>
      <div
        onClick={() => fsm.goToAction(ACTIONS.POSITIVE_RETURN_OPTIONS)}
        className='bg-black text-gray-100 px-4 py-3 w-full rounded-lg  text-start flex justify-between text-sm mt-2 font-bold'
      >
        <p>Go back</p>
        <p>&lt;-</p>
      </div>
    </div>
  );
};

export default NegativeReturnOptions;
