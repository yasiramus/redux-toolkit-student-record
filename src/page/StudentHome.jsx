// student home page which contain both student form and student list componet

// importation of the student form component from the component folder
import StudentForm from '../components/StudentForm';

// importation of the student list component from the component folder
import StudentList from '../components/StudentList';

// importation of useSelector and useDispatch from react-redux liberary
import { useSelector, useDispatch } from 'react-redux';

// importation of table and Container component from reactstrap 
import { Table, Container } from 'reactstrap';

// importation of fetchStudentRecord from the store slice folders 
import { fetchStudentRecord } from '../store/slice/StudentsSlice';

// importof useEffect which will only activate if the values in the list change.
import { useEffect } from 'react';

const StudentHome = () => {

    // useSelector is a hook to access the redux store's state(data).
    const records = useSelector((state) => state.recordOfStudents.studentRecord);

    // useDispatch been set here 
    const dispatch = useDispatch();

    // useEffect been used here 
    useEffect(() => {

        // dispatch is been used here to dispatch an action 
        dispatch(fetchStudentRecord())

        // passing a dependency array to the useEffect to only render when changes occurs within the store state 
    },[dispatch])

    return (
      
        <>
      
            <h1 className="text-center text-capitalize fst-italic my-3" id='customshadow'>Records Of Students</h1>

            {/* StudentForm is been used here  */}
            <StudentForm />

            {
                records.length !== 0 ?
            
                <Container className='shadow-lg px-4 pt-4 pb-1 mt-2 mb-4'>

                    <Table dark className="table-bordered">

                        {/* table head  */}
                        <thead className='text-center'>

                            <tr>
                                    
                                <th>Number</th>

                                <th>Name</th>

                                <th>Class</th>

                                <th>Age</th>

                                <th>Date Admitted</th>

                                <th>Date Completed</th> 

                                <th>Actions</th>

                            </tr>

                        </thead>

                            {/* table body  */}
                        <tbody>
                                    
                            {records.map((val, index) => (
                            
                                // student list component is been used here  
                                <StudentList record={val} key={index} specialPropIndex={index} /> 
                            
                            ))}
                                    
                        </tbody>
                                
                    </Table>
                    
                </Container>
                
                :  ( null ) //return null if there is no data present
                
            }  
            
        </>

    )    
    
}

export default StudentHome
