import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();


    const navigateToLogin = () =>{
        navigate('/login')
    }


    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

    }

    return (
        <div className="container border border-primary p-3 w-50 mx-auto mt-4 rounded-3">
      <h2 className="text-center text-primary mt-3">Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p className="mt-2">Already Have an Account? <Link to={'/login'} className="fw-bold text-primary text-decoration-none" onClick={navigateToLogin}>Please Login</Link></p>
    </div>
    );
};

export default Register;