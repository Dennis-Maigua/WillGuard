import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';

import FormContainer from './FormContainer';
import AppInput from './AppInput';
import SubmitButton from './SubmitButton';
import FormNavigator from './FormNavigator';
import { navigateToLogin, navigateToSignup } from '../utils/helper';
import CustomFormik from './CustomFormik';

const initiateValues = {
    email: ''
};

const validateSchema = yup.object({
    email: yup.string().email('Invalid email').required('Email is missing!')
});

export default function ForgotPassword() {
    const navigation = useNavigation();

    const handleResetLink = (values, formikActions) => {
        setTimeout(() => {
            console.log(values, formikActions);
            formikActions.resetForm();
            formikActions.setSubmitting(false);
        }, 3000);
    };

    return (
        <FormContainer>
            <CustomFormik initialValues={initiateValues} validationSchema={validateSchema} onSubmit={handleResetLink} >
                <AppInput name="email" placeholder="Email" />
                <SubmitButton title="Reset Password" />
                <FormNavigator
                    leftLinkPress={navigateToLogin(navigation)}
                    rightLinkPress={navigateToSignup(navigation)}
                    leftLinkText="Log In"
                    rightLinkText="Sign Up" />
            </CustomFormik>
        </FormContainer>
    );
}