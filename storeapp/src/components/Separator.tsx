import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Separator() {
    return (
        <View style={styles.seprator}>
        </View>
    )
}

const styles = StyleSheet.create({
    seprator: {
        height: 0.8,
        backgroundColor: '#CAD5E2'
    }
})