import {
    createSlice,
  } from "@reduxjs/toolkit";


  const initialState= {
    departure: {
        id: '', 
        time: '',
        city: '',
        station: ''
    },
    arrival: {
        id: '',
        time: '',
        city: '',
        station: ''
    }
  };
  
  export const selectedTrainSlice = createSlice({
    name: 'selectedTrain',
    initialState,
    reducers: {
      setSelectedTrain: (state, action) => {
        state.departure.id = action.payload.departure.id;
        state.arrival.id = action.payload.arrival.id;
      },
      clearSelectedTrain: (state, action) => {
        state[action.payload].id = { id: ''};
      },
    },
  });
  
  export const { setSelectedTrain, clearSelectedTrain } = selectedTrainSlice.actions;
  
  export const selectedTrainReducer = selectedTrainSlice.reducer;