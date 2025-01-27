import {
    createSlice,
  } from "@reduxjs/toolkit";


  const initialState= {
    from: {
      city: '',
      date: ''
    },
    to: {
      city: '',
      date: ''
    },
  };
  
  export const routeSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
      setCity: (state, action) => {
        state[action.payload.direction].city = action.payload.city;
      },
      clearCity: (state, action) => {
        state[action.payload].city = { _id: '', name: '' };
      },
      switchCity: (state) => {
        const fromCity = state.from.city;
        const toCity = state.to.city;
  
        state.from.city = toCity;
        state.to.city = fromCity;
      },
      setDate: (state, action) => {
        state[action.payload.direction].date = action.payload.date;
      }
    },
  });
  
  export const { setCity, clearCity, switchCity, setDate } = routeSlice.actions;
  
  export const setRoute = routeSlice.reducer;