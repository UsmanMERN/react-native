import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackPramList } from '../App'

import ProductItems from '../components/ProductItems'
import Separator from '../components/Separator'

// Data
import { PRODUCTS_LIST } from '../data/constants'

type HomeProps = NativeStackScreenProps<RootStackPramList, "Home">
export default function Home({ navigation }: HomeProps) {
    return (
        <View style={styles.container}>
            <FlatList data={PRODUCTS_LIST} keyExtractor={item => item.id} ItemSeparatorComponent={Separator} renderItem={({ item }) => (
                <Pressable onPress={() => navigation.navigate('Details', { product: item })}>
                    <ProductItems product={item} />
                </Pressable>
            )} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        backgroundColor: "#FFFFFF"
    }
})