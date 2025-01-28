import {
    createSlice,
  } from "@reduxjs/toolkit";


  const initialState= {
    departure: {
        paxQuantity: {
            adult: '',
            child: '',
            infant: ''
        },
        seatsSelected: {
            class: '',
            numbers: {
                num: '',
                price: ''
            },

        },
        optionsSelected: {
            linens:'',
            wifi: '',
            conditioning: ''
        }
    },
    arrival: {
        paxQuantity: {
            adult: '',
            child: '',
            infant: ''
        },
        seatsSelected: {
            class: '',
            numbers: {
                num: '',
                price: ''
            },

        },
        optionsSelected: {
            linens:'',
            wifi: '',
            conditioning: ''
        }
    }
  };
  
  export const selectedSeatsSlice = createSlice({
    name: 'selectedSeats',
    initialState,
    reducers: {
      setSelectedOption: (state, action) => {
        const {direction, option } = action.payload;
        state[direction].optionsSelected[option] = true;
      },
      clearSelectedOption: (state, action) => {
        const {direction, option } = action.payload;
        state[direction].optionsSelected[option] = false;
      },
    },
  });
  
  export const { 
    setSelectedOption, 
    clearSelectedOption 
} = selectedSeatsSlice.actions;
  
  export const selectedSeats = selectedSeatsSlice.reducer;