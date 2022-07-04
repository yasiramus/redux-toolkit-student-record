import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";


export const fetchStudentRecord = createAsyncThunk("studentRecord/studentrecord", () => {

    const response = axios.get("http://localhost:6000/studentrecord")

    const { data } = response;
console.log(data,'fatc');
    return data;
})
// action type is the combination of both the name and action creator which is "record/addNewStudent"

const studentSlice = createSlice({
    
    name: "record",

    // this represent the state 
    initialState: {

        studentRecord: [],

        loading: false,

        error:""
        
    },

    reducers: {
        
        // this represent action creators 
        // adding 
        // addNewStudent: (state, action) => {

            
        // },

        // this represent action creators 
        // deleting 
        deleteStudentRecord: (state, action) => {
            
            state.studentRecord = state.studentRecord.filter(val => val.id !== action.payload)

        },

        // this represent action creators 
        // updating 
        updateStudentRecord: (state, action ) => {

            state.studentRecord = state.studentRecord.map(record => {
               
                return (record.id === action.payload) ? { ...record, completed:!record.completed } : { ...record }
                
            })


        }

    },

    extraReducers: builder => {
        
        builder.addCase(fetchStudentRecord.pending, (state) => state.loading = true)
        
    }
    
})

// exportation of action creators 
export const { addNewStudent,deleteStudentRecord,updateStudentRecord } = studentSlice.actions;

// exportation of reducer
export default studentSlice.reducer;