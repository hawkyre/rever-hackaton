'use client';

import { AllComponents } from '@/components/allComponents';
import { FSMCtxProvider } from '@/components/fsmContext';
import { PopcornProvider } from '@/components/popcorn';

export default function Home() {
  return (
    <PopcornProvider>
      <FSMCtxProvider>
        <AllComponents />
      </FSMCtxProvider>
    </PopcornProvider>
  );
}
