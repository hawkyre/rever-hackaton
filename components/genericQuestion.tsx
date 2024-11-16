'use client';
import { ACTIONS } from '@/fsm';
import { useFSMCtx } from './fsmContext';

interface GenericQuestionProps {
  title: string;
  options: Options[];
}

export interface Options {
  title: string;
  to: ACTIONS;
}

export const GenericQuestion: React.FC<GenericQuestionProps> = ({
  title,
  options,
}) => {
  const { fsm } = useFSMCtx();
  return (
    <div>
      
    </div>
  );
};
