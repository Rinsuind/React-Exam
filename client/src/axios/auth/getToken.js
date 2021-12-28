import customAxios from '..';

const getNewToken = async () => {
    try {
        const response = await customAxios.get('auth/token');
        console.log(response.data);
        setTimeout(getNewToken, 1799990);
    } catch (err) {
        console.log(err.response.data);
        setTimeout(getNewToken, 1799990);
    }
};

export default getNewToken;
