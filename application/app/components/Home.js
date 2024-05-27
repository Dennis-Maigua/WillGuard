import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackActions, useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    const handleLogOut = async (userId) => {
        navigation.dispatch(
            StackActions.replace('logIn', {})
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Home</Text>
            <Button style={styles.btnLogout} onPress={handleLogOut} title="Log Out" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    pageTitle: {
        marginBottom: 20,
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    btnLogout: {
        height: 50,
        marginHorizontal: 50,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        color: '#FFF',
        backgroundColor: '#E8363C'
    }
});