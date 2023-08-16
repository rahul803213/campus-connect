// Redux slice
import { createSlice } from '@reduxjs/toolkit';
import { fetchComments } from './commentAction';
const initialState = {
  comments: {}, // Initial comments array
  loading: false,
  error: null,
  loadMoreCounts: {},
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    // Add any additional reducers if needed
    addComment: (state, action) => {
      state.comments=(action.payload);
    },
    addCommentEveryTime: (state, action) => {
      const { postId, comment } = action.payload;
      state.comments[postId].unshift(comment);
    },
    setComments: (state, action) => {
      const { postId, comments } = action.payload;
      state.comments[postId] = comments;
      state.loadMoreCounts[postId] = 2; // Initialize load more count for this post
    },
    loadMoreComments: (state, action) => {
      const { postId } = action.payload;
      state.loadMoreCounts[postId] += 2;
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  addComment,
  addCommentEveryTime,
  setComments,
  loadMoreComments
} = commentSlice.actions;

export default commentSlice.reducer;
