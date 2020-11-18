import { useState, createContext } from 'react';
import UserModel from '../models';

const UserContext = createContext([], () => {});

const UserContextProvider = props => {
    const [user, setUser] = useState({
    // get from async storage
    });
    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider };