import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./asyncRedax";


const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


const slice = createSlice({
    name: "contacts",
    initialState: {
    contactsList: [],
    isLoading: false,
    error: null
    },
    
    extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,
    
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactsList = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactsList.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactsList = state.contactsList.filter(element => element.id !== action.payload.id);
    },
    
    }
})



export const contactsReducer = slice.reducer;




