import React from 'react';

import { SafeAreaView, View, Text, StyleSheet, useColorScheme } from 'react-native';
export default function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <>
            <SafeAreaView style={Styles.container}>
                <View style={Styles.container}>
                    <Text style={isDarkMode ? Styles.whiteText : Styles.darkText}>Hello this is yawo</Text>
                </View>
            </SafeAreaView>
        </>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText: {
        color: '#fff',
    },
    darkText: {
        color: '#000',
    },
});
