import { Button } from "reactstrap";

// importation of createasyncthunk crud operations from student slice 
import { deleteStudentData, updateStateOfStudent } from "../store/slice/StudentsSlice";

import { useDispatch } from 'react-redux';

// the record and special prop index is used as a prop here from the studenthome component  
const StudentList = ({ record, specialPropIndex }) => {
  
  //concating both the first and last name 
  const fullName = record.firstName + " " + record.lastName;
  
  const dispatch = useDispatch();

  return (

    // table body 
    <tr>
      
      <th scope="row">{specialPropIndex}</th>

      <td>{fullName}</td>

      <td>{record.studentClass}</td> 

      <td>{record.age}</td>

      <td>{record.dateAdmitted}</td>

      <td>{record.dateAdmitted}</td>

      {/* button section  */}
      <td className="d-flex justify-content-evenly">
        
        { record.completed === false ?
          
          <Button className="btn btn-success " onClick={() => dispatch(updateStateOfStudent(record.id))}>InProgress</Button> :

          <Button className="btn btn-success" onClick={() => dispatch(updateStateOfStudent(record.id))} >Completed</Button>

        }
        
        <Button className="btn btn-danger"

          onClick={() => dispatch(deleteStudentData(record.id))}
          
        >Erase</Button>
        
      </td>

    </tr>

  )
  
};

export default StudentList;
