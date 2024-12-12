import { configureStore } from '@reduxjs/toolkit';
import reviewsReducer from './reviewsSlice';
import createSagaMiddleware from 'redux-saga';
import { watchFetchReviews } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    reviews: reviewsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchReviews);
