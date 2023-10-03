

export const getContacts = state => state.contacts.contactsList; 
export const getLoad = state => state.contacts.isLoading; 
export const getError = state => state.contacts.error; 

export const getFilter = state => state.filter;