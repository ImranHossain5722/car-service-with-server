import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import { Link ,useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword,  useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from "../SocialLogin/SocialLogin";



const Register = () => {
  
  const [agree,setAgree]=useState(false);

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword (auth,{sendEmailVerification: true});

   //update profile
  const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);
  
  const navigate =useNavigate();
  const navigateLogin = () =>{
    navigate('/login')
  }


    const handelSubmitRegister = async (event) =>{
        event.preventDefault();
      
        const name =event.target.name.value;
        const email= event.target.email.value ;
        const password=event.target.password.value ;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({displayName:name })
        navigate('/home')
    }

  return (
    <div className='container w-50 mx-auto'>
      <h1 className='text-center mt-2'>Register Please </h1>

      <Form onSubmit={handelSubmitRegister} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Your Name" required />
          <Form.Text className="text-muted">
            We'll never share your name with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check className={agree? 'text-primary' : 'text-danger' } onClick={()=> setAgree(!agree)} type="checkbox" name="terms" id="terms" label="Accept Car-Services Terms And Conditions"/> 
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!agree}>
          Register
        </Button>
      </Form>
      <p>Already have an account ? <Link to="/login" className="text-danger text-decoration-none" onClick={navigateLogin}>Login</Link> </p>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
