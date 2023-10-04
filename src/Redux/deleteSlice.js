import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { sessionParamsGenerator } from '../components/utils/session';


export const deleteHouseThunk = createAsyncThunk('houses/delete', async (houseId) => {
    const response = await axios.delete(`https://house-rental-8mh7.onrender.com/api/v1/houses/${houseId}${sessionParamsGenerator()}`);

    if (response.status !== 200) {
      throw new Error('Delete request failed');
    }

    return response.data;
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
          })
          .addCase(deleteHouseThunk.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message; // Store the error message
            console.error(action.error);
          });
    }
})


export default deleteSlice.reducer;

