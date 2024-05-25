import React from 'react';
import { useNavigation } from '@react-navigation/native';

import FormContainer from './FormContainer';
import AppInput from './AppInput';
import SubmitButton from './SubmitButton';
import FormNavigator from './FormNavigator';
import { navigateToForgotPassword, navigateToLogin } from '../utils/helper';

export default function SignUp() {
    const navigation = useNavigation();

    return (
        <FormContainer>
            <AppInput placeholder="Name" />
            <AppInput placeholder="Email" />
            <AppInput placeholder="Password" />
            <SubmitButton title="Sign Up" />
            <FormNavigator
                leftLinkPress={navigateToLogin(navigation)}
                rightLinkPress={navigateToForgotPassword(navigation)}
                leftLinkText="Log In"
                rightLinkText="Forgot password?" />
        </FormContainer>
    );
}