"use client";

interface ExchangeCourierConfirmationProps {

}

export const ExchangeCourierConfirmation : React.FC<ExchangeCourierConfirmationProps>= () => {
  return (
    <div className='max-w-[500px] w-full px-4 mx-auto flex flex-col py-8'>
      <h1>
        Your exchange is being processed.
      </h1>
      <p>You will soon get an email with information about how to return your item through a courier.</p>
      <div className='bg-black text-gray-100 px-4 py-3 w-full rounded-lg  text-start flex justify-between text-sm font-bold mt-8'>
        <p>Visit store</p>
        <p>-></p>
      </div>
    </div>
  );
}