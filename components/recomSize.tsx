'use client';
import { ACTIONS } from '@/fsm';
import { Item } from './carousel';
import { useFSMCtx } from './fsmContext';
import { useState } from 'react';

interface RecomSizeProps {}

const items: Item[] = [
  {
    picture_url: '/images/camflor.png',
    title: 'Black and White T-Shirt',
    price: '$19.99',
    discount: '20% off',
    to: ACTIONS.POSITIVE_RETURN_OPTIONS,
  },
  {
    picture_url: '/images/camverde.png',
    title: 'Black and White T-Shirt',
    price: '$19.99',
    discount: '20% off',
    to: ACTIONS.POSITIVE_RETURN_OPTIONS,
  },
];

const sizes = ['2XS', 'XS', 'S', 'M', 'L', 'XL'];

const RecomSize: React.FC<RecomSizeProps> = () => {
  const { fsm } = useFSMCtx();
  const [selectedSize, setSelectedSize] = useState<string>('');
  return (
    <div className='max-w-[500px] w-full px-4 mx-auto flex flex-col gap-2 py-8'>
      <p
        className='text-gray-600 text-sm mb-16'
        onClick={() => fsm.goToAction(ACTIONS.WHY)}
      >
        &lt;- Modify issue
      </p>
      <div className='w-full flex flex-col items-center'>
        <h1>Select a size option</h1>
        <p className='px-4 py-3 bg-gray-100 rounded-md text-sm my-4 border-2 border-black'>
          <b>Recommendation</b>
          <p>Similar buyers have returned the XS size for the S size.</p>
        </p>
        <div className='grid grid-cols-3 gap-2 w-full'>
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className={`bg-gray-100 p-4 rounded-lg items-center gap-4 text-sm text-center w-full border-2 ${
                sizes[i] == 'XS' ? 'text-gray-300' : ''
              } ${
                selectedSize == sizes[i]
                  ? 'border-[#188ffc] text-[#188ffc]'
                  : 'border-transparent'
              }`}
              onClick={() => setSelectedSize(sizes[i])}
            >
              {sizes[i]}
            </div>
          ))}
        </div>
        {selectedSize != '' && (
          <div
            onClick={() => fsm.goToAction(ACTIONS.EXCHANGE_SIZE_METHODS)}
            className='text-center bg-black text-gray-100 px-4 py-3 w-full rounded-lg flex justify-between text-sm mt-2 font-bold'
          >
            Exchange XS item for {sizes[sizes.indexOf(selectedSize)]} item
          </div>
        )}
        {/* <ItemCarousel items={items} /> */}
        <h1 className='mt-8'>Your size is not listed?</h1>
        <p className='mb-4'>Here are some similar products you may like:</p>
        <div className='flex flex-col gap-4'>
          <div
            className='border border-gray-300 shadow-md p-3 rounded-lg grid grid-cols-4 items-center gap-4'
            onClick={() => fsm.goToAction(ACTIONS.HANDLE_EXCHANGE)}
          >
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
                <span
                  className='text-lg text-gray-800'
                  style={{ textDecorationLine: 'line-through' }}
                >
                  60€
                </span>
                <span className='text-sm text-red-600'>
                  Only 8€ if you exchange
                </span>
              </div>
            </div>
          </div>
          <div
            className='border border-gray-300 shadow-md p-3 rounded-lg grid grid-cols-4 items-center gap-4'
            onClick={() => fsm.goToAction(ACTIONS.HANDLE_EXCHANGE)}
          >
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
                <span
                  className='text-lg text-gray-800'
                  style={{ textDecorationLine: 'line-through' }}
                >
                  80€
                </span>
                <span className='text-sm text-red-600'>
                  Only 8€ if you exchange
                </span>
              </div>
            </div>
          </div>
        </div>
        <button
          className='bg-gray-100 px-4 py-3 w-full rounded-lg  text-start flex justify-between text-sm mt-8 font-bold'
          onClick={() => fsm.goToAction(ACTIONS.POSITIVE_RETURN_OPTIONS)}
        >
          I don't want to exchange this item
        </button>
      </div>
    </div>
  );
};

export default RecomSize;
