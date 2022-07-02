import { createSlice, nanoid} from "@reduxjs/toolkit";

const studentSlice = createSlice({
    
    name: "record",

    initialState: {

        studentRecord: []
        
    },

    reducers: {
        
        // adding 
        addNewStudent: (state, action) => {

            const record = {

                id: nanoid(),

                allREcords: action.payload,
                
                completed:false
                
            }

            state.studentRecord.push(record);
            
        },

        // deleting 
        deleteStudentRecord: (state, action) => {
            
            state.studentRecord = state.studentRecord.filter(val => val.id !== action.payload)

        },

        // updating 
        updateStudentRecord: (state, action ) => {

            state.studentRecord = state.studentRecord.map(record => {
               
                return (record.id === action.payload) ? { ...record, completed:!record.completed } : { ...record }
                
            })


        }

    }
    
})

export const { addNewStudent,deleteStudentRecord,updateStudentRecord } = studentSlice.actions;

export default studentSlice.reducer;