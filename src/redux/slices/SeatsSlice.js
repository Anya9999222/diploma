import {
    buildCreateSlice,
    asyncThunkCreator,
  } from "@reduxjs/toolkit";

  const initialState = {
    seats: null,
    loading: false,
    error: null,
 };

  const createSliceWithThunk = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
  });
  
  export const seatsSlice = createSliceWithThunk({
    name: "seatsSlice",
    initialState,
    selectors: {
      seats: (state) => state.seats,
    },
    reducers: (create) => ({
        fetchSeats: create.asyncThunk(
          async (url, { rejectWithValue }) => {
            try {
              const response = await fetch(`https://students.netoservices.ru/fe-diplom/routes/${url.id}/seats${url.opts}`);
    
              if (!response.ok) {
                return rejectWithValue("Loading error!");
              }
    
              return await response.json();
            } catch (e) {
              return rejectWithValue(e);
            }
          },
          {
            pending: (state) => {
              state.loading = true;
              state.error = "";
            },
            fulfilled: (state, action) => {
              state.seats = action.payload.map((item, index) => ({
                id: index,
                coach: item.coach,
                seats: item.seats,
              }));
              state.error = "";
            },
            rejected: (state, action) => {
              state.error = action.payload;
            },
            settled: (state) => {
              state.loading = false;
            },
          }
        ),
      }),
  });
  

export const { fetchSeats } = seatsSlice.actions;
export const seatsReducer =  seatsSlice.reducer;