// Aqui colocamos todos os efeitos do nosso redux saga
import { all } from "redux-saga/effects";
import { contrachequeSagas } from "./contrachequeSaga";

export default function* rootSaga() {
  // all é usado quando tem que executar um efeito de saga múltiplo em paralelo
  yield all([...contrachequeSagas]);
}
