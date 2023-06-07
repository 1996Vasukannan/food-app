import { SagaIterator } from "@redux-saga/types";
import { call, put } from "redux-saga/effects";
import { MenuRedux } from "../../redux/menu/MenuRedux";
import { HttpResponseEnum } from "../../enumerations/HttpResponseEnums";

export function* getMenuListsSaga(api: any, action: any): SagaIterator {
  try {
    const response = yield call(api.getMenuLists, action.payload);
    if (response.status === HttpResponseEnum.success) {
      yield put(MenuRedux.actions.getMenuListsSuccess(response.data));
    } else {
      yield put(MenuRedux.actions.getMenuListsFailure(response.data));
    }
  } catch (error: any) {
    yield put(MenuRedux.actions.getMenuListsFailure(error));
  }
}
