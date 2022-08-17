import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("email is required");
    } else if (!email.includes("@", ",")) {
      alert("Please Enter Valid email");
    } else if (!password) {
      alert("enter password");
    } else if (password.length < 3) {
      alert("please enter password greater than 3 characters");
    } else if (password.length > 20) {
      alert("please enter  password less than 20 characters");
    } else {
      navigate("/productDetails");
    }
  };

  return (
    <>
      <Form className="container ">
        <h2 className="col-lg-4 mt-4 " style={{textAlign : "center"}}>Login Form</h2>
        <Form.Group className=" col-lg-4" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className=" col-lg-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <br />
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}
          className="mb-3 col-lg-4"
        >
          Login
        </Button>
      </Form>
    </>
  );
}

export default LoginPage;
