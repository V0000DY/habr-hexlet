import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
  filteredReviews: [],
  platform: '',
  sortParam: 'date',
  sortOrder: 'asc',
  minRating: 1,
  maxRating: 5,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    addReview: (state, { payload }) => {
      const {
        platform,
        sortParam,
        sortOrder,
        minRating,
        maxRating,
      } = state;
      state.reviews.push(payload);
      state.filteredReviews = state.reviews
        .filter((review) => (
          (!platform || review.platform === platform) &&
          review.rating >= minRating &&
          review.rating <= maxRating
        ))
        .sort((a, b) => {
          if (sortOrder === 'asc') {
            return a[sortParam] > b[sortParam] ? 1 : -1;
          } else {
            return a[sortParam] < b[sortParam] ? 1 : -1;
          }
        });
    },
    addReviews: (state, { payload }) => {
      const {
        platform,
        sortParam,
        sortOrder,
        minRating,
        maxRating,
      } = state;
      state.reviews.push(...payload);
      state.filteredReviews = state.reviews
        .filter((review) => (
          (!platform || review.platform === platform) &&
          review.rating >= minRating &&
          review.rating <= maxRating
        ))
        .sort((a, b) => {
          if (sortOrder === 'asc') {
            return a[sortParam] > b[sortParam] ? 1 : -1;
          } else {
            return a[sortParam] < b[sortParam] ? 1 : -1;
          }
        });
    },
    fetchReviews: () => {
      console.log('Feedback request sent to server');
    },
    filterReviews: (state, { payload }) => {
      const {
        platform,
        minRating,
        maxRating,
      } = payload;

      state.platform = platform;
      state.minRating = minRating;
      state.maxRating = maxRating;

      state.filteredReviews = state.reviews.filter((review) => (
        (!platform || review.platform === platform) &&
        review.rating >= minRating &&
        review.rating <= maxRating
      ));
    },
    sortReviews: (state, { payload }) => {
      const { sortParam, sortOrder } = payload;

      const sortedReviews = state.filteredReviews.slice().sort((a, b) => {
        if (sortOrder === 'asc') {
          return a[sortParam] > b[sortParam] ? 1 : -1;
        } else {
          return a[sortParam] < b[sortParam] ? 1 : -1;
        }
      });

      state.sortOrder = sortOrder;
      state.sortParam = sortParam;
      state.filteredReviews = sortedReviews;
    },
  },
});

export const {
  addReview,
  addReviews,
  fetchReviews,
  setReviews,
  filterReviews,
  sortReviews,
} = reviewsSlice.actions;

export default reviewsSlice.reducer;
