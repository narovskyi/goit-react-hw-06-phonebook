import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";


export const addContact = createAction("contacts/addContact", values => {
  return {
    payload: {
      id: nanoid(),
      ...values,
    },
  };
});

export const deleteContact = createAction("contacts/deleteContact");

export const setFilter = createAction("filter/setFilter");


// export const addContact = values => {
//     return { 
//         type: "contacts/addContact",
//         payload: {
//             id: nanoid(),
//             ...values
//         }
//     }
// }

// export const deleteContact = contactId => {
//   return {
//     type: "contacts/deleteContact",
//     payload: contactId,
//   };
// };

// export const setFilter = filterValue => {
//   return {
//     type: "filter/setFilter",
//     payload: filterValue
//   }
// }