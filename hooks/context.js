import React, { useState, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import UserModel from '../models';

const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState({});

  const getUserFromAsyncStorage = async () => {
    const val = await AsyncStorage.getItem('user');
    const userFromStorage = await JSON.parse(val);
    setUser(userFromStorage);
  };
  useEffect(() => {
    getUserFromAsyncStorage();
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
