import Client from "../api/client";

const catchError = error => {
    if (error?.response?.data) {
        return error.response.data;
    }
    return {
        success: false,
        error: error.message
    };
}

export const signup = async values => {
    try {
        const { data } = await Client.post('/user/register', { ...values });
        return data;
    }
    catch (error) {
        return catchError(error);
    }
};

export const login = async values => {
    try {
        const { data } = await Client.post('/user/login', { ...values });
        return data;
    }
    catch (error) {
        return catchError(error);
    }
};

export const forgotPassword = async email => {
    try {
        const { data } = await Client.post('/user/forgot-password', { email });
        return data;
    }
    catch (error) {
        return catchError(error);
    }
};