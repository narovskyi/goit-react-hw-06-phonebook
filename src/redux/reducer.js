import { combineReducers } from "redux";
import { addContact, deleteContact, setFilter } from "./actions";

const contactsInitialState = []

export const contactsReducer = (state = contactsInitialState, action) => {
    switch (action.type) {
        case addContact.type: {
            const normilizedName = action.payload.name.toLowerCase();
            const sameName = state.filter(contact => contact.name.toLowerCase() === normilizedName);
            if (sameName.length > 0) {
                alert(`${action.payload.name} is already in contacts`);
                return state;
            }
            const newState = [...state, action.payload ];
            return newState;
        }  
        case deleteContact.type: {
            const editedState = state.filter(contact => contact.id !== action.payload); 
            return editedState;
        }   
        default:
            return state;
    }
}

let filterInitialState = '';

export const filterReducer = (state = filterInitialState, action) => {
    switch (action.type) {
        case setFilter.type:
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer
});