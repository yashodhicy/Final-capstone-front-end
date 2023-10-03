import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { sessionParamsGenerator } from '../components/utils/session';

const baseUrl = 'https://house-rental-8mh7.onrender.com/api/v1';

export const AddnewHouse = createAsyncThunk(
  'api/AddnewHouse',
  async (payload) => {
    const response = await fetch(`${baseUrl}/houses${sessionParamsGenerator()}`, {
      method: 'POST',
      body: payload,
    });
    const data = await response.json();
    return data;
  },
);

export const getHouses = createAsyncThunk('house/getHouse', async () => {
  const response = await axios.get(`${baseUrl}/houses${sessionParamsGenerator()}`);
  return response.data;
});


export const House = createAsyncThunk('house/House', async (payload) => {
  const response = await axios.get(`${baseUrl}/houses/${payload}`);
  return response.data;
});

export const Deletehouse = createAsyncThunk('house/Deletehouse', async (payload) => {
  const response = await axios.delete(`${baseUrl}/houses/${payload}`);
  return response.data;
});

export const userHouses = createAsyncThunk('house/userhouses',async() => {
  const response = await axios.get(`${baseUrl}/houses/userhouses${sessionParamsGenerator()}`);
  console.log(response);
  return response.data;
})

const initialState = {
  houses: [],
  house: '',
  userhouses: [],
};

const HouseSlice = createSlice({
  name: 'house',
  initialState,
  reducers: {
    addHouse: (state, action) => {
      state.houses.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(House.fulfilled, (state, action) => {
      state.house = action.payload;
    });
    builder.addCase(getHouses.fulfilled, (state, action) => {
      state.houses = action.payload;
    });

    builder.addCase(userHouses.fulfilled, (state, action) => {
      state.userhouses = action.payload;
    });
  },

});

export const { addHouse } = HouseSlice.actions;

export default HouseSlice.reducer;
