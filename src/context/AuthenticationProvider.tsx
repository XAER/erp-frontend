import React from 'react';
import toast from 'react-hot-toast';
import { User } from '../models/User';

export const INITIAL_USER: any | null = null;

export const UserContext = React.createContext(
    {
        user: INITIAL_USER,
        login: (user: User) => {},
        logout: (navigate: any) => {},
        initialRender: (set: boolean) => {},
        isInitialRender: true,
    }
)

function AuthenticationProvider(props: { children: any}) {
    const [ user, setUser ] = React.useState(INITIAL_USER);
    const [ isInitialRender, setIsInitialRender ] = React.useState(false);


    const login = (user: User) => {
        setUser(user);
        setIsInitialRender(false);
    }

    const logout = (navigate: any) => {
        navigate("/");
        localStorage.removeItem('USER_INFO');
        localStorage.clear();
        setUser(null);
        toast.success("Logged out successfully!");
        setIsInitialRender(true);
    }

    const initialRender = (set: boolean) => {
        setIsInitialRender(set);
    }

    return (
        <UserContext.Provider value={{user, login, logout, initialRender, isInitialRender}}>
            {props.children}
        </UserContext.Provider>
    )
}


export default AuthenticationProvider;