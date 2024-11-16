'use client';
import { ACTIONS } from '@/fsm';
import { Item, ItemCarousel } from './carousel';
import { useFSMCtx } from './fsmContext';

interface RecomOtherProps {}

const items: Item[] = [
  {
    picture_url:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    title: 'Black and White T-Shirt',
    price: '$19.99',
    discount: '20% off',
    to: ACTIONS.POSITIVE_RETURN_OPTIONS,
  },
  {
    picture_url:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    title: 'Black and White T-Shirt',
    price: '$19.99',
    discount: '20% off',
    to: ACTIONS.POSITIVE_RETURN_OPTIONS,
  },
  {
    picture_url:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    title: 'Black and White T-Shirt',
    price: '$19.99',
    discount: '20% off',
    to: ACTIONS.POSITIVE_RETURN_OPTIONS,
  },
];

const RecomOther: React.FC<RecomOtherProps> = () => {
  const { fsm } = useFSMCtx();
  return (
    <div className='max-w-[500px] w-full px-4 mx-auto flex flex-col gap-2 py-8'>
      <p
        className='text-gray-600 text-sm mb-16'
        onClick={() => fsm.goToAction(ACTIONS.WHY)}
      >
        &lt;- Modify issue
      </p>
      <div className='w-full flex flex-col items-center text-center'>
        {/* <ItemCarousel items={items} /> */}
        <h1 className='mt-8'>We're sorry to hear that.</h1>
        <p className='mb-4'>
          Buyers like you love these items, would you like to exchange yours for
          another?
        </p>
        <div className='flex flex-col gap-4 text-start'>
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
                  60€
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

export default RecomOther;
