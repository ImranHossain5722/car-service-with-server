// import React,{useRef} from "react";
import { Form, Button } from "react-bootstrap";
import { Link ,useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';



const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
       const navigate =useNavigate();

    
    const hadelSubmitRegister =(event)=>{
        event.preventDefault();
      
        const name =event.target.name.value;
        const email= event.target.name.value;
        const password=event.target.password.value;
    }

    const navigateLogin = event =>{
      navigate('/login')
    }

  return (
    <div className='container w-50 mx-auto'>
      <h1 className='text-center mt-2'>Register Please </h1>

      <Form onSubmit={hadelSubmitRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" required />
          <Form.Text className="text-muted">
            We'll never share your name with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>Already have an account ? <Link to="/login" className="text-danger text-decoration-none" onClick={navigateLogin}>Login</Link> </p>
    </div>
  );
};

export default Register;
