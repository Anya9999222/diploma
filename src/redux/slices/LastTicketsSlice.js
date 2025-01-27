import {
    buildCreateSlice,
    asyncThunkCreator,
  } from "@reduxjs/toolkit";

  const initialState = {
    lastTickets: null,
    loading: false,
    error: null,
 };

  const createSliceWithThunk = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
  });
  
  export const lastTicketsSlice = createSliceWithThunk({
    name: "users",
    initialState,
    selectors: {
      lastTickets: (state) => state.lastTickets,
    },
    reducers: (create) => ({
      fetchTickets: create.asyncThunk(
        async (_, { rejectWithValue }) => {
          try {
            const response = await fetch('https://students.netoservices.ru/fe-diplom/routes/last');
  
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
            state.lastTickets = action.payload.map((ticket, index) => ({
                id: index,
                price: ticket.departure.min_price,
                from: {
                   city: ticket.departure.from.city.name,
                   station: ticket.departure.from.railway_station_name,
                },
                to: {
                   city: ticket.departure.to.city.name,
                   station: ticket.departure.to.railway_station_name,
                },
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
  

export const { fetchTickets } = lastTicketsSlice.actions;
export const lastTicketsReducer =  lastTicketsSlice.reducer;