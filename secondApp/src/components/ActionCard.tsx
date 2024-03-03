import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

export default function ActionCard() {
    // function openWebsite(websiteLink: string) {
    //     Linking.openURL(websiteLink);
    // }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headerContainer}>
                    <Text style={[styles.headerText, styles.textColor]}>I am learning React Native</Text>
                </View>
                <Image source={{ uri: 'https://source.unsplash.com/250x150/?boy' }} style={styles.cardImage} />
                <View style={styles.bodyContainer}><Text style={[styles.labelText, styles.textColor]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cum totam natus ut temporibus?</Text></View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => Alert.alert('Read more', 'Read more')}>
                        <Text style={[styles.socialLink]}>Read more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert('Social media', 'Follw me')}>
                        <Text style={[styles.socialLink]}>Follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold',
        margin: 5,
    },
    card: {
        height: 430,
        width: 350,
        margin: 3,
        backgroundColor: '#fff',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    elevatedCard: {
        elevation: 5,
        shadowOffset: {
            height: 1,
            width: 1,
        },
    },
    headerContainer: {
        // paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    headerText: {
        fontSize: 22,
        fontWeight: '600',
        textTransform: 'capitalize',
    },
    cardImage: {
        height: 250,
        width: '100%',

    },
    labelText: {
        marginVertical: 12,
        fontSize: 13,
        marginHorizontal: 3,
    },
    bodyContainer: {
        padding: 7,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
    },
    socialLink: {
        color: '#e5e5e5',
        backgroundColor: '#fca311',
        padding: 10,
    },
    textColor: {
        color: '#000',
    },

});
