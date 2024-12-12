import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fetchReviews, addReviews } from './reviewsSlice';

function* fetchReviewsSaga() {
  try {
    const response = yield call(axios.get, 'http://localhost:5000/reviews'); //Заменить на api с предоставлением отзывов
    yield put(addReviews(response.data));
  } catch (error) {
    console.log('Ошибка загрузки отзывов:', error);    
  }
};

export function* watchFetchReviews() {
  yield takeEvery(fetchReviews, fetchReviewsSaga);
};
