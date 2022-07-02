import StudentForm from '../components/StudentForm';

import StudentList from '../components/StudentList';

import { useSelector } from 'react-redux';

import { Table, Container } from 'reactstrap';

const StudentHome = () => {

    const records = useSelector((state) => state.recordOfStudents.studentRecord);

    return (
      
        <>
      
            <h1 className="text-center text-capitalize fst-italic my-3" id='customshadow'>Students Records</h1>

            <StudentForm />

            {
                records.length !== 0 ?
            
                <Container className='shadow-lg p-4'>

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
                            
                                <StudentList record={val} key={index} specialPropIndex={index} /> 
                            
                            ))}
                                    
                        </tbody>
                                
                    </Table>
                    
                </Container>
                
                :( null )
                
            }  
            
        </>

    )    
    
}

export default StudentHome
