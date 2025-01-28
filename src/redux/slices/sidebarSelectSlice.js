import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
   
   options: {
      firstClass: '',
      secondClass:'',
      thirdClass: '',
      fourthClass: '',
      wifi: '',
      express: '',
   },
   prices: { min: 0, max: 100000 },
   time: {
      to: {
         departure: { min: 0, max: 24  },
         arrival: { min: 0, max: 24  },
      },
      from: {
         departure: { min: 0, max: 24  },
         arrival: { min: 0, max: 24  },
      },
   },
};

const sidebarSelectSlice = createSlice({
   name: 'sidebarSelectSlice',
   initialState,
   reducers: {
      changeOptionsFields(state, action) {
         const { name, value } = action.payload;
         state.options[name] = value;
      },
      changePriceFields(state, action) {
         state.prices.min = action.payload.min;
         state.prices.max = action.payload.max;
      },
      changeTimeFields(state, action) {
         console.log(action.payload)
         const { stage, direction, min, max } = action.payload;
         state.time[direction][stage] = { min: min, max: max};
      },
      setExpanded(state, action) {
         const { name } = action.payload;
         state.time[name].expanded = !state.time[name].expanded;
      },
      removeSidebarSelectionData() {
         return empty;
      },
   }
});

export const {
   changeOptionsFields,
   changePriceFields,
   changeTimeFields,
   removeSidebarSelectionData,
   setExpanded,
} = sidebarSelectSlice.actions;

export const selectOptions = (state) => state.sidebarSelect.options;
export const selectPrices = (state) => state.sidebarSelect.prices;
export const selectTime = (state) => state.sidebarSelect.time;

export const sidebarSelectReducer = sidebarSelectSlice.reducer;