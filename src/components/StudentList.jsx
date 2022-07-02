import { Button } from "reactstrap";

import { deleteStudentRecord,updateStudentRecord } from "../store/slice/StudentsSlice";

import { useDispatch } from 'react-redux';

const StudentList = ({ record, specialPropIndex }) => {
  
  const fullName = record.allREcords.firstName + " " + record.allREcords.lastName;

  const dispatch = useDispatch();
  return (

    <tr>
      
      <th scope="row">{specialPropIndex}</th>

      <td>{fullName}</td>

      <td>{record.allREcords.studentClass}</td>

      <td>{record.allREcords.age}</td>

      <td>{record.allREcords.dateAdmitted}</td>

      <td>{record.allREcords.dateAdmitted}</td>

      {/* button section  */}
      <td>
        
        { record.completed === false ?
          
          <Button className="mx-4 btn btn-success" onClick={() => dispatch(updateStudentRecord(record.id))}>InProgress</Button> :

          <Button className="mx-4 btn btn-success" onClick={() => dispatch(updateStudentRecord(record.id))} >Completed</Button>

        }
        
        <Button className="btn btn-danger"

          onClick={() => dispatch(deleteStudentRecord(record.id))}
          
        >Erase</Button>
        
      </td>

    </tr>

  );
};

export default StudentList;
