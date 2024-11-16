'use client';

interface REVERMarketplaceProps {}

const REVERMarketplace: React.FC<REVERMarketplaceProps> = () => {
  return (
    <div className='max-w-[500px] w-full px-4 mx-auto flex flex-col py-8'>
      <h1>You're being redirected to the REVER marketplace.</h1>
      <p>Please, wait a few seconds...</p>
      <p className='bg-[#188ffc] text-black mt-8 mb-4 p-4 rounded-md font-bold'>
        REVER Marketplace is a platform where you can buy and sell your items
        directly to other buyers. Save time and money by listing your items on
        REVER Marketplace, and contribute to the carbon footprint.
      </p>
    </div>
  );
};

export default REVERMarketplace;
