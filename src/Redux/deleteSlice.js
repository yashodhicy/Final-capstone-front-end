import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
export const deleteHouseThunk = createAsyncThunk('houses/delete', async (houseId) => {
  try {
    const response = await axios.delete(`https://house-rental-8mh7.onrender.com/api/v1/houses/${houseId}?access-token=Qk5AG4wl5r7ZMA1GzLE0ZA&client=DAHOeSDbu-bxDebj04bxfA&uid=yash2@email.com`);
    if (!response.ok) {
      throw new Error('Delete request failed');
    }
    return response.error;
  }
  catch (error) {
    throw error;
  }
});
const initialState = {
    status: 'idle',
    data: null,
    error: null,
};
const deleteSlice = createSlice({
    name: 'deletehouse',
    initialState,
    reducers: [],
    extraReducers: builder => {
        builder
          .addCase(deleteHouseThunk.pending, (state) => {
            state.status = 'loading'
          })
          .addCase(deleteHouseThunk.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.data = action.payload;
            console.log(state.status);
          })
          .addCase(deleteHouseThunk.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message; // Store the error message
            console.error(action.error);
          });
    }
})
export default deleteSlice.reducer;