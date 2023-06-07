import { takeLatest } from "redux-saga/effects";
import { MenuRedux } from "../redux/menu/MenuRedux";
import api from "../services/Apiservices";
import { getMenuListsSaga } from "./menu/MenuSaga";

export default function* root() {
  yield takeLatest(
    MenuRedux.actions.getMenuListsRequest,
    getMenuListsSaga,
    api
  );
}
