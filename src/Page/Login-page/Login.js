import React, { useState } from 'react';
import { Button, Card, FloatingLabel, Form } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Context/auth';
import './Login.css'

const Login = () => {

    const auth = useAuth();

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const [validated, setValidated] = useState(false);

    const login = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            auth.login(userName, password);
            console.log(`UserName: ${userName} Password: ${password}`);
            event.preventDefault();
            setValidated(false);
        };
        setValidated(true);
    };

    if(auth.user){
        return <Navigate to="/profile" />
    }

    return (
        <>
            <h4 className='mt-5 text-center'>Login #08</h4>
            <div className='d-flex justify-content-center container'>
                <Card className='card-container container shadow-sm mt-5 '>
                    <Card.Body className='text-center d-flex justify-content-center row'>
                        <div className='p-2 mb-2 mt-3 color rounded-5 '>
                            <i className="bi bi-person text-white size"></i>
                        </div>
                        <h4 className='morado mb-4'>Have an account?</h4>
                        <Form noValidate validated={validated} onSubmit={(event) => login(event)}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="User Name"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="User Name"
                                    required
                                    onChange={(event) => setUserName(event.target.value)}
                                    value={userName} />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    required
                                    onChange={(event) => setPassword(event.target.value)}
                                    value={password} />
                            </FloatingLabel>
                            <Form.Group className='d-flex justify-content-between column'>

                                <Form.Check
                                    type='checkbox'
                                    id="customCheckbox"
                                    className="mt-3 mb-5 custom-checkbox morado fw-bolder"
                                    label={`Remember Me`}
                                    required
                                />
                                <span className='morado mt-3 fw-bolder'>Forgot Password</span>

                            </Form.Group>

                            <Button
                                variant="outline-dark"
                                type='submit'
                                className='color buttonSize w-100'>
                                Iniciar Seción
                            </Button>
                        </Form>

                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export { Login };