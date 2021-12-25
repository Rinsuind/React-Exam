import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/auth';
import { useNavigate } from 'react-router';

const requireAuth = (ChildComponent) => {
    const ComposeComponent = (props) => {
        const { auth } = useContext(AuthContext);
        const navigate = useNavigate();

        useEffect(() => {
            if (!auth.user) {
                navigate('/login');
            }
        }, [auth.user]);

        return <ChildComponent {...props} />;
    };
    return ComposeComponent;
};

export default requireAuth;
