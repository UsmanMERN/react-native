import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackPramList } from '../App'

import ProductItems from '../components/ProductItems'
import Separator from '../components/Separator'

// Data
import { PRODUCTS_LIST } from '../data/constants'

type HomeProps = NativeStackScreenProps<RootStackPramList, "Home">
export default function Home() {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({})