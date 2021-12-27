import { createContext, useReducer, useContext } from 'react';
import bookReducer from '../reducers/bookReducer';
const initialState = {
    books: null,
    err: '',
    book: null,
};
const BookContext = createContext();
const BookProvider = (props) => {
    const [shelf, dispatch] = useReducer(bookReducer, initialState);

    return <BookContext.Provider value={{ shelf, dispatch }}>{props.children}</BookContext.Provider>;
};

export { BookContext, BookProvider };
