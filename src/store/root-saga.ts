import { all, call } from "typed-redux-saga/macro";

import { categoriesSaga } from "./categories/categories.saga";

export function* rootSaga() {
  yield* all([call(categoriesSaga)]);
}
