import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../../Context/auth';

const Logout = () => {

    const auth = useAuth();

    const logout = (event) => {
        event.preventDefault();
        auth.logout()
        console.log(`Salir`);
    }

    return (
        <>
            <Form onSubmit={(event) => logout(event)}>
                <h1>Estas segur@ que quieres salir</h1>
                <Button
                    variant="outline-dark"
                    type='submit'
                    className='color buttonSize w-50'>
                    Logout
                </Button>
            </Form>
        </>
    );
}

export { Logout };