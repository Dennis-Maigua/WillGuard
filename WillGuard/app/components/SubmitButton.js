import { Dimensions, Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

const SubmitButton = ({ title, onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.btnSubmit}>
            <Text style={styles.btnText}>{title}</Text>
        </Pressable>
    );
};


const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    btnSubmit: {
        height: 50,
        width: width - 40,
        marginBottom: 20,
        borderRadius: 8,
        backgroundColor: '#E8363C',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 20,
        color: '#FFF'
    }
});

export default SubmitButton;

