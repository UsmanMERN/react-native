import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const FlatCards = () => {
    return (
        <View>
            <View>
                <Text style={styles.headaingText}>FlatCards</Text>
            </View>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text style={styles.text}>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text style={styles.text}>blue</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text style={styles.text}>green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text style={styles.text}>green</Text>
                </View>
            </View>
        </View>
    );
};

export default FlatCards;

const styles = StyleSheet.create({
    headaingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        paddingHorizontal: 8,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    card: {
        width: '20%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 8,
        marginHorizontal: 8,
        marginVertical: 9,
    },
    cardOne: {
        backgroundColor: '#fb5607',
    },
    cardTwo: {
        backgroundColor: '#cdb4db',
    },
    cardThree: {
        backgroundColor: '#219ebc',
        color: '#fff',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        // color: '#000',
    },
});
