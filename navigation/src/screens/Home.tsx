import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({ navigation }: HomeProps) => {

    const navigateToDetails = () => {
        navigation.navigate('Details', { productId: '87' });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.smallText}>Home Screen</Text>
            <Button title="Go to Details" onPress={navigateToDetails} />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallText: {
        color: '#000',
        marginVertical: 23,
        fontSize: 20,
        fontWeight: '700',
    },
});
