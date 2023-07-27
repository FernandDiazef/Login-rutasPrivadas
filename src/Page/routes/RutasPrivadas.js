import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthRoute } from '../../Context/auth';
import { Home } from '../Home/Home';
import { Logout } from '../Logout/Logout';
import { Profile } from '../Profile/Profile';

const RutasPrivadas = () => {
    return (
        <>
            <AuthRoute>
                <Routes>
                <Route path='/' element={<Home />} />
            <Route
              path='/logout'
              element={
                <Logout />
              }
            />

            <Route
              path='/profile'
              element={
                <Profile />
              }
            />

            <Route path='*' element={"no found"} />
                </Routes>
            </AuthRoute>
        </>
    );
}

export { RutasPrivadas };