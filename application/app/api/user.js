import AsyncStorage from "@react-native-async-storage/async-storage";
import Client from "./client";

export const signIn = async (email, password) => {
    try {
        const signInRes = await Client.post('/login', {
            email,
            password
        });

        if (signInRes.data.success) {
            const token = signInRes.data.token;
            await AsyncStorage.setItem('token', token);
        }

        return signInRes;
    }

    catch (error) {
        console.log('Invalid login!', error.message);
    }
}