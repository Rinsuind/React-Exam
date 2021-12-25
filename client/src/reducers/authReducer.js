import { RESPONSE_FAIL, RESPONSE_SUCCESS, USER_STATUS } from '../types';

const userReducer = (state, action) => {
    switch (action.type) {
        case RESPONSE_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case RESPONSE_FAIL:
            return { ...state, loading: false, err: action.payload };
        case USER_STATUS:
            return { ...state, status: action.payload };

        default:
            return state;
    }
};

export default userReducer;
