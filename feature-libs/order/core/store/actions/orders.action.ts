import { StateUtils } from '@spartacus/core';
import { OrderHistoryList } from '@spartacus/order/root';
import { ORDERS } from '../order-state';

export const LOAD_USER_ORDERS = '[Order] Load User Orders';
export const LOAD_USER_ORDERS_FAIL = '[Order] Load User Orders Fail';
export const LOAD_USER_ORDERS_SUCCESS = '[Order] Load User Orders Success';
export const CLEAR_USER_ORDERS = '[Order] Clear User Orders';
export const LOAD_UNIT_ORDERS = '[Order] Load Unit Orders';
export const LOAD_UNIT_ORDERS_FAIL = '[Order] Load Unit Orders Fail';
export const LOAD_UNIT_ORDERS_SUCCESS = '[Order] Load Unit Orders Success';
export const CLEAR_UNIT_ORDERS = '[Order] Clear Unit Orders';

export class LoadUserOrders extends StateUtils.LoaderLoadAction {
  readonly type = LOAD_USER_ORDERS;
  constructor(
    public payload: {
      userId: string;
      pageSize?: number;
      currentPage?: number;
      sort?: string;
      replenishmentOrderCode?: string;
    }
  ) {
    super(ORDERS);
  }
}

export class LoadUserOrdersFail extends StateUtils.LoaderFailAction {
  readonly type = LOAD_USER_ORDERS_FAIL;
  constructor(public payload: any) {
    super(ORDERS, payload);
  }
}

export class LoadUserOrdersSuccess extends StateUtils.LoaderSuccessAction {
  readonly type = LOAD_USER_ORDERS_SUCCESS;
  constructor(public payload: OrderHistoryList) {
    super(ORDERS);
  }
}

export class ClearUserOrders extends StateUtils.LoaderResetAction {
  readonly type = CLEAR_USER_ORDERS;
  constructor() {
    super(ORDERS);
  }
}

export type UserOrdersAction =
  | LoadUserOrders
  | LoadUserOrdersFail
  | LoadUserOrdersSuccess
  | ClearUserOrders;

export class LoadUnitOrders extends StateUtils.LoaderLoadAction {
  readonly type = LOAD_UNIT_ORDERS;
  constructor(
    public payload: {
      userId: string;
      pageSize?: number;
      currentPage?: number;
      sort?: string;
    }
  ) {
    super(ORDERS);
  }
}

export class LoadUnitOrdersFail extends StateUtils.LoaderFailAction {
  readonly type = LOAD_UNIT_ORDERS_FAIL;
  constructor(public payload: any) {
    super(ORDERS, payload);
  }
}

export class LoadUnitOrdersSuccess extends StateUtils.LoaderSuccessAction {
  readonly type = LOAD_UNIT_ORDERS_SUCCESS;
  constructor(public payload: OrderHistoryList) {
    super(ORDERS);
  }
}

export class ClearUnitOrders extends StateUtils.LoaderResetAction {
  readonly type = CLEAR_UNIT_ORDERS;
  constructor() {
    super(ORDERS);
  }
}

export type UnitOrdersAction =
  | LoadUnitOrders
  | LoadUnitOrdersFail
  | LoadUnitOrdersSuccess
  | ClearUnitOrders;
