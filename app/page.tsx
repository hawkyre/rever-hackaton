'use client';

import { AllComponents } from '@/components/allComponents';
import { FSMCtxProvider } from '@/components/fsmContext';

export default function Home() {
  return (
    <FSMCtxProvider>
      <AllComponents />
    </FSMCtxProvider>
  );
}
