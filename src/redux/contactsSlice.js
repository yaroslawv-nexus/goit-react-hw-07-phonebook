import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';


const initialContacts =  [{ id: 'id-1', name: 'Test Contact', number: '459-12-56' },
    { id: 'id-2', name: 'Test Contact2', number: '459-12-567' }
  ];

const slice = createSlice({
    name: "contacts",
    initialState: { contactsList: initialContacts},
    reducers: {
         addContactSlice: {reducer(state, action) {
             state.contactsList.push(action.payload);
         }, prepare(contact) {
             return {
                 payload: {
                     ...contact,
                     id: nanoid(),
                }
            }
        }},
        removeContactSlice(state, action) {
            state.contactsList = state.contactsList.filter(element => element.id !== action.payload);
        }
    }
})

const persistConfig = {
  key: 'contacts',
  storage,
}



export const getContacts = state => state.contacts.contactsList; 

export const contactsReducer = persistReducer(persistConfig, slice.reducer)

export const { addContactSlice, removeContactSlice } = slice.actions;


