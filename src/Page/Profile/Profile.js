import React from 'react';
import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/auth';

const Profile = () => {

    const auth = useAuth();

    return (
        <>
            <h1>Hola, {auth.user?.userName}</h1>

            {auth.user.roles.find(item => item === 'admin')
                && <Button variant='info' className='me-2'>Soy Admin</Button>
            }

            {(auth.user.roles.find(item => item === 'moderador')
                || auth.user.roles.find(item => item === 'admin'))
                && <Button variant='danger' className='me-2'>Soy Moderador</Button>
            }

            {(auth.user.roles.find(item => item === 'teletubie')
                || auth.user.roles.find(item => item === 'admin'))
                &&
                <>
                    <Button variant='warning' className='me-2'>Soy Teletubie</Button>
                    <br />
                </>
            }
            
            {/* <Link to="/logout" className='mb-4'>
                Cerrar Seción
            </Link> */}
        </>
    );
}

export { Profile };