import React from 'react';
import { useNavigation } from '@react-navigation/native';

import FormContainer from './FormContainer';
import AppInput from './AppInput';
import SubmitButton from './SubmitButton';
import FormNavigator from './FormNavigator';
import { navigateToLogin, navigateToSignup } from '../utils/helper';

export default function ForgotPassword() {
    const navigation = useNavigation();

    return (
        <FormContainer>
            <AppInput placeholder="Email" />
            <SubmitButton title="Reset Password" />
            <FormNavigator
                leftLinkPress={navigateToLogin(navigation)}
                rightLinkPress={navigateToSignup(navigation)}
                leftLinkText="Log In"
                rightLinkText="Sign Up" />
        </FormContainer>
    );
}