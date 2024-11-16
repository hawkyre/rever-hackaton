'use client';
import { ACTIONS } from '@/fsm';

interface CarouselProps {
  items: Item[];
}

export interface Item {
  picture_url: string;
  title: string;
  price: string;
  discount: string;
  to: ACTIONS;
}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useFSMCtx } from './fsmContext';

export const ItemCarousel: React.FC<CarouselProps> = ({ items }) => {
  const { fsm } = useFSMCtx();
  return (
    <Carousel>
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem>
            <div
              key={item.title}
              className='flex gap-4 items-center'
              onClick={() => fsm.goToAction(ACTIONS.HANDLE_EXCHANGE)}
            >
              <img
                src={item.picture_url}
                alt={item.title}
                className='w-16 h-16'
              />
              <div>
                <h2 className='text-xl font-bold'>{item.title}</h2>
                <p className='text-sm'>
                  {item.price}
                  <span className='text-xs text-gray-500'>{item.discount}</span>
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
