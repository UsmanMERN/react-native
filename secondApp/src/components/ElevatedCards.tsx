import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const ElevatedCards = () => {
    return (
        <View>
            <Text style={styles.headaingText}>ElevatedCards</Text>
            <ScrollView horizontal style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.text}>Tap here</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.text}>here</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.text}>to</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.text}>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.text}>more</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default ElevatedCards;

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
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 8,
        marginHorizontal: 8,
        marginVertical: 9,
    },
    cardElevated: {
        backgroundColor: '#669bbc',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        // color: '#000',
    },
});
