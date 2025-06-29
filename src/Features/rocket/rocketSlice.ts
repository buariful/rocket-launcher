import { createSlice } from '@reduxjs/toolkit';

export const rocketSlice = createSlice({
    name: 'rocketSlice',
    initialState: { data: [] },
    reducers: {
        getAllData: (state, action) => {
            state.data = action.payload;
            console.log(action.payload)
        }
    }
});

export const { getAllData } = rocketSlice.actions;

export default rocketSlice.reducer;