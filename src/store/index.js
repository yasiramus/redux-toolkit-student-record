import { configureStore } from "@reduxjs/toolkit";

import studentReducer from "./slice/StudentsSlice";

export const store = configureStore({

    reducer: {

        recordOfStudents:studentReducer
    }
    
})