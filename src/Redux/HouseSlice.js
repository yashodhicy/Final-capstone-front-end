import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://house-rental-8mh7.onrender.com/api/v1';

export const AddnewHouse = createAsyncThunk(
  'api/AddnewHouse',
  async (payload) => {
    const response = await fetch(`${baseUrl}/houses?access-token=ttbqe7K338BIaChQ6-xmUg&client=Z7druuGq8xXAeW1U6QznSA&uid=brhanu@gamil.com`, {
      method: 'POST',
      body: payload,
    });
    const data = await response.json();
    return data;
  },
);

export const getHouses = createAsyncThunk('house/getHouse', async () => {
  const response = await axios.get(`${baseUrl}/houses?access-token=ttbqe7K338BIaChQ6-xmUg&client=Z7druuGq8xXAeW1U6QznSA&uid=brhanu@gamil.com`);
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
  const response = await axios.get(`${baseUrl}/houses/userhouses/access-token=ttbqe7K338BIaChQ6-xmUg&client=Z7druuGq8xXAeW1U6QznSA&uid=brhanu@gamil.com`);
  return response.data;
})

const initialState = {
  houses: [],
  house: '',
  userhouses: [{
    id: 1,
    user_id: 2,
    name: 'white house',
    area: 7,
    number_of_rooms: 2,
    description: 'this is a house with a kitchen and a pool',
    location: 'Nigera',
    created_at: '2023-09-28T06:02:18.490Z',
    updated_at: '2023-09-28T06:02:18.490Z',
    price: '100.5',
    image: 'https://tse4.mm.bing.net/th?id=OIP.Y9sxyn8pPZdClDz-jOpbAAHaE8&pid=Api&P=0&h=220'
  },
  {
    id: 2,
    user_id: 3,
    name: 'Apartama one',
    area: 120,
    number_of_rooms: 4,
    description: 'beautiful house ready for rent',
    location: 'Mekelle',
    created_at: '2023-09-29T02:58:49.562Z',
    updated_at: '2023-09-29T02:58:49.562Z',
    price: '3000.0',
    image: 'https://thumbs.dreamstime.com/z/beautiful-exterior-home-pictures-new-home-design-images-modern-best-house-design-images-best-house-images-images-latest-172194515.jpg'
  }],
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
