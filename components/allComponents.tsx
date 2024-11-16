'use client';

import { ACTIONS } from '@/fsm';
import { useFSMCtx } from './fsmContext';
import RecomSize from './recomSize';
import CashReturnConfirmation from './cashReturnConfirmation';
import HandleExchange from './handleExchange';
import Luck from './luck';
import NegativeCashbackMethods from './negativeCashbackMethods';
import NegativeReturnOptions from './negativeReturnOptions';
import PositiveReturnOptions from './positiveReturnOptions';
import PositiveMethodConfirmation from './positiveMethodConfirmation';
import RecomOther from './recomOther';
import Why from './why';
import PositiveCashbackMethods from './positiveCashbackMethods';
import VoucherConfirmation from './voucherConfirmation';
import REVERMarketplace from './reverMarketplace';
import { ExchangeConfirmation } from './exchangeConfirmation';
import { ExchangeCourierConfirmation } from './exchangeCourierConfirmation';
import HandleSizeExchange from './handleSizeExchange';
import { ExchangeSizeConfirmation } from './exchangeSizeConfirmation';

interface AllComponentsProps {}

export const AllComponents: React.FC<AllComponentsProps> = () => {
  const { fsm } = useFSMCtx();
  return (
    <div className='h-screen'>
      {fsm.action === ACTIONS.WHY && <Why />}
      {fsm.action === ACTIONS.RECOM_COLOR && <RecomSize />}
      {fsm.action === ACTIONS.RECOM_OTHER && <RecomOther />}
      {fsm.action === ACTIONS.HANDLE_EXCHANGE && <HandleExchange />}
      {fsm.action === ACTIONS.POSITIVE_RETURN_OPTIONS && (
        <PositiveReturnOptions />
      )}
      {fsm.action === ACTIONS.NEGATIVE_RETURN_OPTIONS && (
        <NegativeReturnOptions />
      )}
      {fsm.action === ACTIONS.POSITIVE_CASHBACK_METHODS && (
        <PositiveCashbackMethods />
      )}
      {fsm.action === ACTIONS.NEGATIVE_CASHBACK_METHODS && (
        <NegativeCashbackMethods />
      )}
      {fsm.action === ACTIONS.LUCK && <Luck />}
      {fsm.action === ACTIONS.POSITIVE_METHOD_CONFIRMATION && (
        <PositiveMethodConfirmation />
      )}
      {fsm.action === ACTIONS.EXCHANGE_CONFIRMATION && <ExchangeConfirmation />}
      {fsm.action === ACTIONS.REVER_MARKETPLACE && <REVERMarketplace />}
      {fsm.action === ACTIONS.VOUCHER_CONFIRMATION && <VoucherConfirmation />}
      {fsm.action === ACTIONS.EXCHANGE_COURIER_CONFIRMATION && (
        <ExchangeCourierConfirmation />
      )}
      {fsm.action === ACTIONS.EXCHANGE_SIZE_METHODS && <HandleSizeExchange />}
      {fsm.action === ACTIONS.EXCHANGE_SIZE_CONFIRMATION && (
        <ExchangeSizeConfirmation />
      )}
      {fsm.action === ACTIONS.CASH_RETURN_CONFIRMATION && (
        <CashReturnConfirmation />
      )}
    </div>
  );
};
