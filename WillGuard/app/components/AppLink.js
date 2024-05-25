import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';

const AppLink = ({ text, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <Text style={styles.link}> {text} </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    link: {
        fontSize: 16,
        color: '#E8363C'
    }
});

export default AppLink;