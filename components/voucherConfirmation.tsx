'use client';

interface VoucherConfirmationProps {}

const VoucherConfirmation: React.FC<VoucherConfirmationProps> = () => {
  return (
    <div className='max-w-[500px] w-full px-4 mx-auto flex flex-col py-8'>
      <h1>Your voucher is being processed!</h1>
      <p>You should get an email soon with your voucher code.</p>
      <p className='mt-8 mb-4 bg-gray-100 p-4 rounded-md font-semibold'>
        While we're here, why don't you check out other items you may want to
        buy with your voucher?
      </p>
      <div className='flex flex-col gap-4'>
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
              <span className='text-lg text-gray-800'>90€</span>
            </div>
          </div>
        </div>
        <div className='border border-gray-300 shadow-md p-3 rounded-lg grid grid-cols-4 items-center gap-4'>
          <img
            src='/images/camflor.png'
            alt='Next.js logo'
            className='rounded-md'
          />
          <div className='col-span-3 flex flex-col justify-between h-full py-2'>
            <div>
              <p className='text-sm'>Camiseta corta adidas by Stella Mc...</p>
              <p className='text-xs text-gray-500'>XS | Black</p>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='text-lg text-gray-800'>80€</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherConfirmation;
