import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const ElevatedCards = () => {
    return (
        <View>
            <Text style={styles.headaingText}>Trending places</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image source={{ uri: 'https://source.unsplash.com/250x150/?car' }} style={styles.cardImage} />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardLabel}>Cars Here</Text>
                        <Text style={styles.cardTitle}>Faisalabad city,Punjab</Text>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quibusdam.</Text>
                        <Text style={styles.footer}>12 min,ago</Text></View>
                </View>
            </View>
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
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        height: 300,
        width: 300,
        borderRadius: 10,
        backgroundColor: '#ffffff',
    },
    cardBody: {
        margin: 5,
    },
    cardElevated: {
        elevation: 5,
        shadowOffset: {
            height: 1,
            width: 1,
        },
    },
    cardImage: {
        height: 160,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        // borderRadius: 10,
        // marginBottom: 5,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
    },
    description: {
        fontWeight: 'bold',
        fontSize: 13,
        color: '#000',
        marginVertical: 12,
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
    },
    cardLabel: {
        fontWeight: 'normal',
        fontSize: 12,
        color: '#000',
        paddingVertical: 6,
    },
    footer: {
        color: '#000',
        fontSize: 10,
        alignSelf: 'flex-end',
    },
});
