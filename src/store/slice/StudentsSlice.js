import { createSlice} from "@reduxjs/toolkit";

// action type is the combination of both the name and action creator which is "record/addNewStudent"

const studentSlice = createSlice({
    
    name: "record",

    // this represent the state 
    initialState: {

        studentRecord: []
        
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

    }
    
})

// exportation of action creators 
export const { addNewStudent,deleteStudentRecord,updateStudentRecord } = studentSlice.actions;

// exportation of reducer
export default studentSlice.reducer;