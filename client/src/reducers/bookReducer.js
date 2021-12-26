import { RESPONSE_SUCCESS, RESPONSE_FAIL, GET_SINGLE_BOOK, UPDATE_BOOK } from '../types';

const bookReducer = (state, action) => {
    switch (action.type) {
        case RESPONSE_SUCCESS:
            return { ...state, books: action.payload };
        case RESPONSE_FAIL:
            return { ...state, err: action.payload };
        case GET_SINGLE_BOOK:
            return { ...state, book: action.payload };
        case UPDATE_BOOK:
            return { ...state, book: action.payload };
        default:
            return state;
    }
};

export default bookReducer;
