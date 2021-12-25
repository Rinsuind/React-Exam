import { useState } from 'react';

const useForm = (initialValue) => {
    const [formState, setFormsState] = useState(initialValue);
    const handleChange = (e) => {
        setFormsState({ ...formState, [e.target.name]: e.target.value });
    };
    return [formState, handleChange];
};

export default useForm;
