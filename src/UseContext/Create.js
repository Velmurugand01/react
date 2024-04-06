import React, { createContext, useState } from 'react';

const DataContext = createContext();


export const DataProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [enter, setEnter] = useState('');

    const login = (a) => {
        console.log(a);
        setIsLoggedIn(true);
        setEnter('login Successfully');
    };

    const logout = () => {
        setIsLoggedIn(false);
        setEnter('logout Succesfully');
    };

    return (
        <DataContext.Provider value={{ isLoggedIn, login, logout, enter }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
