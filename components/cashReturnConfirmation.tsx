'use client';
interface CashReturnConfirmationProps {}

const CashReturnConfirmation: React.FC<CashReturnConfirmationProps> = () => {
  return (
    <div className='max-w-[500px] w-full px-4 mx-auto flex flex-col py-8'>
      <h1>
        Your money has been transfered back to your original payment method.
      </h1>
      <p>The funds should arrive to your account in the next 1-2 business days</p>
      <div className='bg-black text-gray-100 px-4 py-3 w-full rounded-lg  text-start flex justify-between text-sm font-bold mt-8'>
        <p>Visit store</p>
        <p>-></p>
      </div>
    </div>
  );
};

export default CashReturnConfirmation;
