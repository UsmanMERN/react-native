import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';

const ContactList = () => {
    const users = [
        {
            username: 'Alice',
            userID: 12345,
            status: 'Online',
            imageUrl: 'https://www.gravatar.com/avatar/1234567890',
        },
        {
            username: 'Bob_123',
            userID: 54321,
            status: 'Away',
            imageUrl: 'https://www.gravatar.com/avatar/1234567890',
        },
        {
            username: 'Charlie_Cool',
            userID: 98765,
            status: 'Busy',
            imageUrl: 'https://picsum.photos/id/237/200/300',
        },
        {
            username: 'Emily_Long_Username',
            userID: 789456,
            status: 'Available',
            imageUrl: 'https://www.gravatar.com/avatar/1234567890',
        },
    ];


    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView style={styles.container} scrollEnabled={false}>
                {users.map(({ userID, username, status, imageUrl }) => (
                    <View key={userID} style={styles.userCard}>
                        <Image source={{ uri: imageUrl }} style={styles.userImage} />
                        <View>
                            <Text style={styles.username}>{username}</Text>
                            <Text style={styles.status}>{status}</Text></View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default ContactList;

const styles = StyleSheet.create({
    headingText: {
        color: '#000',
        paddingTop: 12,
        fontSize: 22,
        fontWeight: 'bold',
    },
    container: {
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    userCard: {
        flexDirection: 'row',
        marginVertical: 4,
        alignItems: 'center',
        backgroundColor: '#6a4c93',
        borderRadius: 12,
        marginHorizontal: 5,
        padding: 4,
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 50,
        marginEnd: 12,
    },
    username: {
        fontSize: 16,
        fontWeight: '600',
        alignContent: 'center',
        marginBottom: 6,
    },
    status: {
    },
});
