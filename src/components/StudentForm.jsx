// studnt form component 

// importation of component from reactStrap 
import { Form, Row, Col, FormGroup, Label, Input, Button, Container } from 'reactstrap';

// useState importation 
import { useState } from 'react';

// importation of add new student thunk operation from student slice 
import { addANewStudent } from '../store/slice/StudentsSlice';

// use Dispatch importion for dispatching of actions  
import { useDispatch } from 'react-redux';

const StudentForm = () => {

    // all state set 
    const [firstName, setFirstName] = useState("");

    const [lastName, setLastName] = useState("");

    const [age, setAge] = useState("");

    const [studentClass, setStudentClass] = useState("");

    const [dateAdmitted, setDateAdmitted] = useState("");

    const [dateCompleted, setDateCompleted] = useState("");

    // all input fields 
    const metaData = {

        firstName,

        lastName,

        age,

        studentClass,

        dateAdmitted,
        
        dateCompleted

    }
    
    //dispatch variable for dispatching of actions
    const dispatch = useDispatch();

    // adding of records func 
    const addingOfRecords = e => {

        e.preventDefault();
        
        // dispatching of add new student action 
        dispatch(addANewStudent(metaData))

        // clearing all input field 
        setFirstName("");
            
        setLastName("");
        
        setAge("");
            
        setStudentClass("");

        setDateAdmitted("");
            
        setDateCompleted("")

    };

    return (
      
        // main container 
        <Container className='mx-auto'>
            
            {/* sub container  */}
            <Form className='my-4' onSubmit={addingOfRecords}>

                {/* ist row for the input field which consist of firstname and last name */}
                <Row>

                    {/* firstname section  */}
                    <Col md={6}>
                        
                        <FormGroup>
                            
                            <Label className='fs-6'>First Name</Label>
                            
                            <Input placeholder="enter first name" type="name" name="firstName" className='shadow-sm p-2' value={firstName} onChange={ (e) => ( setFirstName(e.target.value) )} />
                            
                        </FormGroup>
                        
                    </Col>
                    
                    {/* last name section  */}
                    <Col md={6}>
                        
                        <FormGroup>
                            
                            <Label className='fs-6'>Last Name</Label>
                            
                            <Input placeholder="enter last name" type="name"  className='shadow-sm p-2'  value={lastName} onChange={ (e) => ( setLastName(e.target.value) )} />   

                        </FormGroup>
                        
                    </Col>
                    
                </Row>

                {/* second row for the input field which consist of age and class */}
                <Row>

                    {/* age section  */}
                    <Col md={6}>
                        
                        <FormGroup>
                            
                            <Label className='fs-6'>Age</Label>
                            
                            <Input  placeholder="enter age name" type="number"  className='shadow-sm p-2'   value={age} onChange={ (e) => ( setAge(e.target.value) )} />
                            
                        </FormGroup>
                        
                    </Col>

                    {/* class section  */}
                    <Col md={6}>
                        
                        <FormGroup>
                            
                            <Label className='fs-6'>Class</Label>
                            
                            <Input placeholder="indicate class name" type="number"  className='shadow-sm p-2'  value={studentClass} onChange={ (e) => ( setStudentClass(e.target.value) )} />   

                        </FormGroup>
                        
                    </Col>

                </Row>
                
                {/* third row for the input field which consist of date admitted and dfate completed */}
                <Row>

                    {/* date admitted  */}
                    <Col md={6}>
                        
                        <FormGroup>
                            
                            <Label className='fs-6'>Date Admmitted</Label>
                            
                            <Input placeholder="enter date admitted" type="date"  className='shadow-sm p-2'  value={dateAdmitted} onChange={ (e) => ( setDateAdmitted(e.target.value) )} />
                            
                        </FormGroup>
                        
                    </Col>

                    {/* date completed  */}
                    <Col md={6}>
                        
                        <FormGroup>
                            
                            <Label className='fs-6'>Date Commpleted</Label>
                            
                            <Input  placeholder="enter date completed" type="date"  className='shadow-sm p-2'  value={dateCompleted} onChange={ (e) => ( setDateCompleted(e.target.value) )} />   

                        </FormGroup>
                        
                    </Col>

                </Row>

                {/* button section  */}
                <Button className="btn btn-success">Add New Student</Button>

            </Form>
            {/* sub container ends here*/}

        </Container>
        // main container ends here 
    )
    
};

export default StudentForm;
