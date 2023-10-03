
import { filterReducer } from "./filterSlice";
import { contactsReducer } from "./contactsSlice";
import { configureStore } from "@reduxjs/toolkit";


export let store = configureStore({
    reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    },
});


