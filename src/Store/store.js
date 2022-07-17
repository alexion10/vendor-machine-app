import { configureStore } from "@reduxjs/toolkit";
import { counter } from "../Dashboard/Reducer";

const store = configureStore({
    reducer: {
       counter,
    }
})


export default store; 