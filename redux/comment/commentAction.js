import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCommentsApi } from '@/network/commentApi';

export const fetchComments = createAsyncThunk('comments/fetchComments', async (postId) => {
  const response = await fetchCommentsApi(postId); // Replace with your API call
  
  return response.comments; // Assuming the API response has a 'comments' property
});