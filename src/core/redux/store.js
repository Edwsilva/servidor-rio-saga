import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import ContrachequeReducer from './feature/contrachequeSlice'
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    contracheque: ContrachequeReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga)

export default store;
