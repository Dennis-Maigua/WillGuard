import React from 'react';
import { useNavigation } from '@react-navigation/native';

import FormContainer from './FormContainer';
import AppInput from './AppInput';
import SubmitButton from './SubmitButton';
import FormNavigator from './FormNavigator';
import { navigateToForgotPassword, navigateToSignup } from '../utils/helper';

export default function Login() {
    const navigation = useNavigation();

    return (
        <FormContainer>
            <AppInput placeholder="Email" />
            <AppInput placeholder="Password" />
            <SubmitButton title="Log In" />
            <FormNavigator
                leftLinkPress={navigateToSignup(navigation)}
                rightLinkPress={navigateToForgotPassword(navigation)}
                leftLinkText="Sign Up"
                rightLinkText="Forgot password?" />
        </FormContainer>
    );
}