
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, FormControl, Alert } from "react-bootstrap";

const LoginForm = ({username, password, usernameOnChange, passwordOnchange, handleSubmit, validateForm}) => (
    <Form onSubmit={handleSubmit}>
        <Alert variant="primary">
            Try with below credentials:<br /> username: admin@gmail.com <br /> password: admin
        </Alert>
        <FormGroup controlId="username">
            <Form.Label>Email</Form.Label>
            <FormControl
                autoFocus
                type="email"
                defaultValue={username}
                onChange={usernameOnChange}
            />
        </FormGroup>
        <FormGroup controlId="password">
            <Form.Label>Password</Form.Label>
            <FormControl
                defaultValue={password}
                onChange={passwordOnchange}
                type="password"
            />
        </FormGroup>
        <div className="text-center"> 
            <Button
                disabled={!validateForm()}
                type="submit">
                Login
            </Button>
        </div>
    </Form>
);

LoginForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    usernameOnChange: PropTypes.func.isRequired,
    passwordOnchange: PropTypes.func.isRequired,
    validateForm: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default LoginForm;