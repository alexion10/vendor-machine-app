import { configureStore } from "@reduxjs/toolkit";
import { counter } from "../menuInteraction/Reducer";

const store = configureStore({
    reducer: {
       counter,
    }
})


export default store; 