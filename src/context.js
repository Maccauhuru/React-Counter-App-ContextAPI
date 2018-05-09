import React from 'react'

//set the state
const state = {
number : 0
}

//initialize the state value
const NumberContext = React.createContext(state.number);


export default NumberContext;
