import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>
const Details = ({ route }: DetailsProps) => {
    const { productId } = route.params;
    console.log('productId :>> ', productId);

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Details'>>();

    return (
        <View style={styles.container}>
            <Text style={styles.smallText}>Details {productId}</Text>
            <Button title="Go to 1 step back" onPress={() => navigation.pop(1)} />
            <Button title="Go to Back" onPress={() => navigation.goBack()} />
            <Button title="Go to First Screen" onPress={() => navigation.popToTop()} />
        </View>
    );
};

export default Details;

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

