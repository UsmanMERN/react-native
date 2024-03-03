import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const About = ({ navigation }) => {
    const handlePress = () => {
        return navigation.goBack();
    };

    return (
        <View style={styles.home}>
            <Text>About</Text>
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.button}>Click me</Text>
            </TouchableOpacity>
        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#f44336', // Red color
        color: 'white',
        padding: 10,
        borderRadius: 5,
    },
});
