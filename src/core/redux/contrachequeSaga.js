import { takeLatest, put, fork, call } from "redux-saga/effects";
import * as actions from "./feature/contrachequeSlice";
//import { fetchMovies, fetchMovie } from "./api";
import * as API from "./api";

// function* onLoadMovieAsync({ payload }) {
//   try {
//     const movieId = payload;
//     console.log("Estou no onLoadMovieAsync ", movieId)
//     // call -> Wait for the promisse to finish. The argument should be a function that returns a promisse.
//     //const response = yield call(fetchMovies, movieName);
//     const response = yield call(API.fetchMovie, movieId);
//     if(response.status === 200) {
//       yield put(actions.setMovie({...response.data}))
//     }

//   } catch (error) {
//     console.log(error)
//   }
// }

// método que irá disparar as acoes
// function* onLoadMovies() {
//   console.log("Estou no onLoadMovies() do movies saga")
//   // Ação disparada e a função que irá escutar (devemos criar)
//   yield takeLatest(actions.getMovies.type, onLoadMoviesAsync)
// }
function* onLoadContrachequeAsync() {
  try {
    // const movieName = payload;
    console.log("Estou no onLoadContrachequeAsync ");
    // call -> Wait for the promisse to finish. The argument should be a function that returns a promisse.
    // const response = yield call(API.fetchMovies, movieName);
    const response = yield call(API.fetchContracheque);
    if (response.status === 200) {
      yield put(() => console.log("RESPOSTA ", response.data));
      //yield put(actions.getContracheque({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadContracheque() {
  console.log("Estou no onLoadContracheque() do contracheque saga");
  // Ação disparada e a função que irá escutar (devemos criar)
  yield takeLatest(actions.getContracheque.type, onLoadContrachequeAsync);
}

// fork is simply used to call a method you passed a method and mehod is invoked
export const contrachequeSagas = [fork(onLoadContracheque)];

// Agora iremos para o rootSaga
