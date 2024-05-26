import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';

import FormContainer from './FormContainer';
import AppInput from './AppInput';
import SubmitButton from './SubmitButton';
import FormNavigator from './FormNavigator';
import { navigateToForgotPassword, navigateToLogin } from '../utils/helper';
import CustomFormik from './CustomFormik';

const initiateValues = {
    name: '',
    email: '',
    password: ''
};

const validateSchema = yup.object({
    name: yup.string().trim().required('Name is missing!'),
    email: yup.string().email('Invalid email').required('Email is missing!'),
    password: yup.string().trim().min(8, 'Password should be 8 characters or more!').required('Password is missing!')
});

export default function SignUp() {
    const navigation = useNavigation();

    const handleSignUp = (values, formikActions) => {
        setTimeout(() => {
            console.log(values, formikActions);
            formikActions.resetForm();
            formikActions.setSubmitting(false);
        }, 3000);
    };

    return (
        <FormContainer>
            <CustomFormik initialValues={initiateValues} validationSchema={validateSchema} onSubmit={handleSignUp} >
                <AppInput name="name" placeholder="Name" />
                <AppInput name="email" placeholder="Email" />
                <AppInput secureTextEntry name="password" placeholder="Password" />
                <SubmitButton title="Sign Up" />
                <FormNavigator
                    leftLinkPress={navigateToLogin(navigation)}
                    rightLinkPress={navigateToForgotPassword(navigation)}
                    leftLinkText="Log In"
                    rightLinkText="Forgot password?" />
            </CustomFormik>
        </FormContainer>
    );
}