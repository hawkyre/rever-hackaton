"use client";

interface ExchangeConfirmationProps {

}

export const ExchangeConfirmation : React.FC<ExchangeConfirmationProps>= () => {
  return (
    <div className='max-w-[500px] w-full px-4 mx-auto flex flex-col py-8'>
      <h1>
        Your exchange is being processed.
      </h1>
      <p>Go to your nearest store to exchange your item. Once we receive your item, you will receive the discount code.</p>
      <div className='bg-black text-gray-100 px-4 py-3 w-full rounded-lg  text-start flex justify-between text-sm font-bold mt-8'>
        <p>Visit store</p>
        <p>-></p>
      </div>
    </div>
  );
}