import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
import Snackbar from 'react-native-snackbar';

import { currencyByRupee } from "./constants"
import CurrencyButton from "./components/CurrencyButton"

export default function App(): JSX.Element {
  const [inputValue, setInputValue] = useState('')
  const [reslutValue, setReslutValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter a Value to Convert',
        backgroundColor: '#3d405b',
        textColor: '#00000',
      });
    }
    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValued = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValued.toFixed(2)}`
      setReslutValue(reslutValue);
      setTargetCurrency(targetValue.name)
    } else {
      return Snackbar.show({
        text: 'Enter a Value to Convert',
        backgroundColor: '#F4BE2C',
        textColor: '#00000',
      });
    }
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>1</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})