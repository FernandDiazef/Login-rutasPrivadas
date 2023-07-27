import React, { createContext, useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const adminList = ['Fernando', 'JuanDc'];
    const moderadorList = ['Erick', 'Keren'];
    const teletubieList = ['Juanita', 'Lupito', 'Erick']

    const navigate = useNavigate();

    const login = (userName, password) => {
        let roles = [];

        adminList.forEach(item => {
            if (item === userName)
                roles.push("admin");

            return true
        })

        moderadorList.forEach(item => {
            if (item === userName)
                roles.push("moderador");

            return true
        })

        teletubieList.forEach(item => {
            if (item === userName)
                roles.push("teletubie");

            return true
        })

        setUser({ userName, password, roles });
        navigate('/profile');

        // if(userName === 'Fernando' && password === "loco"){
        //     setUser({userName, password});
        //     navigate('/profile');
        // }else {
        //     alert("eendejo")
        // }
    };

    const logout = () => {
        setUser(null);
        navigate('/login');
    }

    const auth = { user, login, logout };

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

const AuthRoute = (props) => {
    const auth = useAuth();

    if (!auth.user) {
        return <Navigate to="/login" />
    }

    return props.children
}

export { AuthProvider, useAuth, AuthRoute };