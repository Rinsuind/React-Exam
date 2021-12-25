import { createContext, useReducer } from 'react';
import userReducer from '../reducers/authReducer';
import { useEffect } from 'react';
import customAxios from '../axios';
import { RESPONSE_SUCCESS, USER_STATUS } from '../types';

const initialState = {
    user: null,
    loading: true,
    err: '',
    status: false,
};

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [auth, dispatch] = useReducer(userReducer, initialState);

    useEffect(() => {
        customAxios
            .get('user/profile')
            .then((response) => {
                dispatch({ type: USER_STATUS, payload: false });
                dispatch({ type: RESPONSE_SUCCESS, payload: { ...response.data } });
            })
            .catch((err) => dispatch({ type: USER_STATUS, payload: true }));
    }, []);

    if (!auth.user && !auth.status) {
        return <p>Loading....</p>;
    }

    return <AuthContext.Provider value={{ auth, dispatch }}>{props.children}</AuthContext.Provider>;
};
