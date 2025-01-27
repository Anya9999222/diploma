import {
    buildCreateSlice,
    asyncThunkCreator,
  } from "@reduxjs/toolkit";

  const initialState = {
    tickets: null,
    loading: false,
    error: null,
 };

  const createSliceWithThunk = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
  });
  
  export const searchOptionsSlice = createSliceWithThunk({
    name: "searchOptionsSlice",
    initialState,
    selectors: {
      tickets: (state) => state.tickets,
    },
    reducers: (create) => ({
        fetchData: create.asyncThunk(
          async (url, { rejectWithValue }) => {
            try {
              const response = await fetch(`https://students.netoservices.ru/fe-diplom/routes?from_city_id=${url.from.city.value}&to_city_id=${url.to.city.value}&date_start=${url.from.date}&date_end=${url.to.date}&${url.opts}`);
    
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
              state.tickets = action.payload.items.map((ticket, index) => ({
                  id: index,
                  departure: ticket.departure,
                  arrival: ticket.arrival,
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
  

export const { fetchData } = searchOptionsSlice.actions;
export const searchOptionsReducer =  searchOptionsSlice.reducer;