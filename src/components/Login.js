import React, { useState }from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import "../login.css";

function Login() {
  var [[emaile, passworde], setErrors] = useState(["", ""]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "email":
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        emaile = !regex.test(value)
          ? setErrors(["Enter valid email e.g. abc@gmail.com", passworde])
          : setErrors(["", passworde]);
        break;

      case "password":
        passworde =
          value.length < 6
            ? setErrors([emaile, "Password should be more than 6 characters"])
            : setErrors([emaile, ""]);
        break;

      default:
        break;
    }
  };

    let url = "/";
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" id="navbar-style">
        <Navbar.Brand href={url}>
          <img
            src={require("../static/images/nav-log.png")}
            alt=""
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#">HELP & CONTACT</Nav.Link>
            <Nav.Link href="#">FAQ</Nav.Link>
            <Nav.Link href="/">JOIN</Nav.Link>
            <Nav.Link>
              <button type="submit" className="sell-button">
                SELL
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <p>
              <img
                src={require("../static/images/login.png")}
                alt=""
                className="open-market-login"
              />
            </p>
          </div>

          <div className="col-md-5">
            <Form   method="POST">
              <h2 id="heading-two">Welcome Back</h2>
              <p>
                Don't have an account?{" "}
                <a href={url} className="form-link">
                  create an account
                </a>{" "}
              </p>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control
                  type="email"
                  className="form-input"
                  name="email"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  error={emaile.length > 0}
                  autoComplete="email"
                  onChange={handleChange}
                  required="true"
                />
                <small
                  style={{
                    color: "red",
                    marginLeft: "15px",
                    fontSize: "0.75rem",
                  }}
                >
                  {emaile}
                </small>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  className="form-input"
                  name="password"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  autoComplete="current-password"
                  error={passworde.length > 0}
                  onChange={handleChange}
                  required="true"
                />
                
                <small
                  style={{
                    color: "red",
                    marginLeft: "15px",
                    fontSize: "0.75rem",
                  }}
                >
                  {passworde}
                </small>
              </Form.Group>
              <p className="forgot-password">
                {" "}
                <a href="/">Forgot Password?</a>{" "}
              </p>

              <button type="submit" className="button">
                Sigin in
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
