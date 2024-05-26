import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';

import FormContainer from './FormContainer';
import AppInput from './AppInput';
import SubmitButton from './SubmitButton';
import FormNavigator from './FormNavigator';
import { navigateToForgotPassword, navigateToSignup } from '../utils/helper';
import CustomFormik from './CustomFormik';

const initiateValues = {
    email: '',
    password: ''
};

const validateSchema = yup.object({
    email: yup.string().email('Invalid email')
        .required('Email is missing!'),
    password: yup.string().trim()
        .min(8, 'Password should be 8 to 20 characters long!')
        .required('Password is missing!')
});

export default function Login() {
    const navigation = useNavigation();

    const handleLogin = (values, formikActions) => {
        setTimeout(() => {
            console.log(values, formikActions);
            formikActions.resetForm();
            formikActions.setSubmitting(false);
        }, 3000);
    };

    return (
        <FormContainer>
            <CustomFormik initialValues={initiateValues} validationSchema={validateSchema} onSubmit={handleLogin} >
                <AppInput name="email" placeholder="Email" />
                <AppInput secureTextEntry name="password" placeholder="Password" />
                <SubmitButton title="Log In" />
                <FormNavigator
                    leftLinkPress={navigateToSignup(navigation)}
                    rightLinkPress={navigateToForgotPassword(navigation)}
                    leftLinkText="Sign Up"
                    rightLinkText="Forgot password?" />
            </CustomFormik>
        </FormContainer>
    );
}