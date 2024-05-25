import { Dimensions, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const AppInput = ({ value, placeholder, onChange, ...rest }) => {
    return (
        <TextInput
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            style={styles.input}
            {...rest}
        />
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: width - 40,
        fontSize: 20,
        paddingHorizontal: 15,
        marginBottom: 20,
        borderRadius: 8,
        backgroundColor: '#EAE9E7'
    }
});

export default AppInput;