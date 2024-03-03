// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import FlatCards from '../../components/FlatCards';
import ElevatedCards from '../../components/ElevatedCards';
import FancyCard from '../../components/FancyCard';
import ActionCard from '../../components/ActionCard';
import ContactList from '../../components/ContactList';

const Home = ({ navigation }) => {
    // const handlePress = () => {
    //     return navigation.navigate('about');
    // };

    return (
        // <View style={styles.home}>
        //     <Text style={{ color: '#000' }}>Home</Text>
        //     <TouchableOpacity onPress={handlePress}>
        //         <Text style={styles.button}>Click me</Text>
        //     </TouchableOpacity>
        //     <FlatCards />
        // </View>
        <>
            <ScrollView>
                <SafeAreaView>
                    <FlatCards />
                    <ElevatedCards />
                    <FancyCard />
                    <ActionCard />
                    <ContactList />
                </SafeAreaView>
            </ScrollView>
        </>
    );
};

export default Home;

// const styles = StyleSheet.create({
//     home: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         color: '#000',
//     },
//     button: {
//         backgroundColor: '#f44336', // Red color
//         color: 'white',
//         padding: 10,
//         borderRadius: 5,
//     },
// });
