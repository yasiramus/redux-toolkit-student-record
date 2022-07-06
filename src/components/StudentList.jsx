// student list component

// imported Button from reactStrap 
import { Button } from "reactstrap";

// importation of createasyncthunk   deleteStudentData and updateStateOfStudent operations from student slice 
import { deleteStudentData, updateStateOfStudent } from "../store/slice/StudentsSlice";

// importation of useDispatch for dispatching of actions from react-redux liberary 
import { useDispatch } from 'react-redux';

// the record and special prop index is used as a prop here which has been passed from the studenthome component  
const StudentList = ({ record, specialPropIndex }) => {
  
  //concating both the first and last name to get the student full name 
  const fullName = record.firstName + " " + record.lastName;
  
  // equating the useDispatch to dispatch since useDispatch cant be used directly 
  const dispatch = useDispatch();

  return (

    // table body row
    <tr>
      
      {/* table row head  */}
      <th scope="row">{specialPropIndex+1}</th>

      {/* table row datas  */}
      <td>{fullName}</td>

      <td>{record.studentClass}</td> 

      <td>{record.age}</td>

      <td>{record.dateAdmitted}</td>

      <td>{record.dateAdmitted}</td>

      {/* button section  */}
      <td className="d-flex justify-content-evenly">
        
        {/* button for the update section  */}
        { record.completed === false ?
          
          // dispatch is been use here to dispatch an action 
          <Button className="btn btn-success " onClick={() => dispatch(updateStateOfStudent(record.id))}>InProgress</Button> :

          <Button className="btn btn-success" onClick={() => dispatch(updateStateOfStudent(record.id))} >Completed</Button>

        }
        
        {/* delete button  */}
        <Button className="btn btn-danger"

          // dispatch is been use here to dispatch an action 
          onClick={() => dispatch(deleteStudentData(record.id))}
          
        >Erase</Button>
        
      </td>

    </tr>

  )
  
};

export default StudentList;
