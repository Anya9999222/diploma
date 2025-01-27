import { configureStore } from "@reduxjs/toolkit";

import { lastTicketsReducer } from "./slices/LastTicketsSlice";
import { setRoute } from "./slices/RouteSlice";
import { searchOptionsReducer } from "./slices/SearchOptionsSlice";
import { seatsReducer } from "./slices/SeatsSlice";
import { selectedTrainReducer } from "./slices/SelectedTrainSlice";
import { sidebarSelectReducer } from "./slices/sidebarSelectSlice";
import { selectedSeats } from "./slices/SelectedSeatsSlice";

export const store = configureStore({
  reducer: {
    route: setRoute,
    lastTickets: lastTicketsReducer,
    tickets: searchOptionsReducer,
    seats: seatsReducer,
    selectedTrain: selectedTrainReducer,
    sidebarSelect: sidebarSelectReducer,
    selectedSeats: selectedSeats,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

