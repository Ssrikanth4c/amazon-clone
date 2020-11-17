// setup data layer

import { createContext } from "react";

// to track cart 
import React, {useContext, useReducer} from 'react';
// THIS IS THE DATALAYER
export const StateContext= React.createContext();
// data layer login resides in reducer
export const StateProvider= ({reducer,initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children} 
    </StateContext.Provider>
);

export const useStateValue= ()=>useContext(StateContext);
