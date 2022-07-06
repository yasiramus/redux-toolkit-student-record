// importation of createSlice and createAysncthunk functions fom redux toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// current is imported and used when you want to console.log the state 
// you call rhe current as a func and pass the state to it 

// importation of axios for crud operations 
import axios from "axios";

// createAsyncThunk  returns a promise 

// fetching student record thunk get request
export const fetchStudentRecord = createAsyncThunk("fetchingStudentData", async () => {

    const response = await axios.get("http://localhost:5050/studentrecord")

    const { data } = response;
    
    return data;

});

// add new student thunk post request 
export const addANewStudent = createAsyncThunk("addANewStudent", async (studentData) => {
    
    const response = await axios.post("http://localhost:5050/studentrecord", studentData )

    const { data } = response;
    
    return data;

});

// update student record thunk put request 
export const updateStateOfStudent = createAsyncThunk("updatestudentdata", async (id) => {

    const response = await axios.put(`http://localhost:5050/studentrecord/${id}`)

    const { data } = response;

    return data;

});

// delete request thunk delete request 
export const deleteStudentData = createAsyncThunk("deletestudentdata", async (id) => {

    const response = await axios.delete(`http://localhost:5050/studentrecord/${id}`)

    const { data } = response;
    
    return data;

});

// action type is the combination of both the name and action creator which is "record/addNewStudent"

// createSlice is a function that accepts an initial state, an object full of reducer functions, and a "slice name", and 
// automatically generates action creators and action types that correspond to the reducers and state.
const studentSlice = createSlice({
    
    // all what is writteen within the createSlice are know as the slice operations 
    // example the slice name is a slice operation just as the extra reducers

    // slice name
    name: "record",

    //this represent the state 
    initialState: {

        studentRecord: [],

        loading: false,

        error: ""
        
    },

    // the extra reducers communicate with the thunk, they work together, the other cant be used without the other 
    extraReducers: builder => {
        
        // fetching of student record begins from here
        // pending state 
        builder.addCase(fetchStudentRecord.pending, state => { state.loading = true } )
        
        // fulfilled state 
        .addCase(fetchStudentRecord.fulfilled, (state, action) => {

            state.loading = false;

            state.studentRecord = action.payload

        })

        // rejected state 
        .addCase(fetchStudentRecord.rejected, (state, action) => {

            state.loading = false;

            state.error = action.error.message;

        })
        // fetching of student record ends here

        // adding of student record begins from here
        // pending state 
        .addCase(addANewStudent.pending, state => { state.loading = true } )

        // fulfilled state 
        .addCase(addANewStudent.fulfilled, (state, action) => {
            
            state.loading = false;

            state.studentRecord.push(action.payload);

        })

        // rejected state 
        .addCase(addANewStudent.rejected, (state, action) => {
            
            state.loading = false;

            state.error = action.error.message;

        })
        // adding  of student record ends here

        // update  of student record begins from here
        // pending state
        .addCase(updateStateOfStudent.pending, state => { state.loading = true })
        
        //fulfilled state
        .addCase(updateStateOfStudent.fulfilled, (state, action) => {

            // change the loading state to false
            state.loading = false;

            // this will return the index number of the object 
            const indexNumber = state.studentRecord.findIndex(studentDetail => { return studentDetail.id === action.payload.id })

            // update student record based on their index number remember only the completed is going to change to either true or false 
            state.studentRecord[indexNumber] = { ...action.payload }
            
        })

        // rejected state 
        .addCase(updateStateOfStudent.rejected, (state, action) => {
            
            // change loading state to true 
            state.loading = false;

            state.error = action.error.message;

        })
        //updating  of student record ends here
        
        //deleting of student record begins from here
        // pending state 
        .addCase(deleteStudentData.pending, state => { state.loading = true })
        
        // fulfiled state 
        .addCase(deleteStudentData.fulfilled, (state, action) => {

            // change loading state to false 
            state.loading = false;

            // this will return the index number of the object 
            const indexNumber = state.studentRecord.findIndex(detail => detail.id === action.payload.id)

            // indexNumber is the starting point while 1 indicate the number of items to be remove from the array 
            state.studentRecord.splice(indexNumber, 1)

        })

        // rejected state 
        .addCase(deleteStudentData.rejected, (state, action) => {
            
            state.loading = false;

            state.error = action.error.message;

        })
        //deleting  of student record ends here
    }
    
})

// console.log(studentSlice);
// when the studentSlice is log it output {name: 'record', actions: {…}, caseReducers: {…}, reducer: ƒ, getInitialState: ƒ}
// without the extraReducers

// exportation of reducer
export default studentSlice.reducer;