const inputTypes = (value) => {
    return {
        email: () => (/\w+@\w+\.\w+/.test(value) ? 'correct' : 'invalid'),
        username: () => (value.length < 3 ? 'invalid' : 'correct'),
        password: () => (value.length < 5 ? 'invalid' : 'correct'),
        repeatPassword: (password) => (password !== value ? 'invalid' : 'correct'),
    };
};

const validator = (event, password) => {
    const { value, name } = event.target;
    if (value === '') {
        return '';
    }
    if (!inputTypes(value)[name]) {
        return 'Wrong input name!';
    }
    return inputTypes(value)[name](password);
};

export { validator };
