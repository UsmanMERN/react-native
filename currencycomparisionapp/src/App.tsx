import React, { useState } from "react";
import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import Snackbar from 'react-native-snackbar';

import { currencyByRupee } from "./constants";
import CurrencyButton from "./components/CurrencyButton";

export default function App(): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter a Value to Convert',
        backgroundColor: '#3d405b',
        textColor: '#ffffff',
      });
    }
    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'Enter a Valid Value to Convert',
        backgroundColor: '#F4BE2C',
        textColor: '#ffffff',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.topContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.currencyLabel}>PKR</Text>
          <TextInput
            maxLength={14}
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            clearButtonMode="always"
            keyboardType='number-pad'
            placeholder="Enter the amount in PKR..."
            style={styles.inputField}
          />
        </View>
        {resultValue && (
          <Text style={styles.resultText}>{resultValue}</Text>
        )}
        <View style={styles.buttonContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <Pressable
                style={[styles.currencyButton, targetCurrency === item.name && styles.selectedCurrencyButton]}
                onPress={() => buttonPressed(item)}
              >
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  topContainer: {
  },
  inputContainer: {
    alignItems: 'center',
    // marginBottom: 20,
    display: 'flex',
    justifyContent: 'space-between'
  },
  currencyLabel: {
    fontSize: 18,
    marginRight: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  inputField: {
    // flex: 1,
    // fontSize: 18,
    // padding: 20,
    // borderRadius: 5,
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
  },

  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000',
    alignSelf: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  currencyButton: {
    margin: 5,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#FFF',
    height: 110,
    width: 110,
    elevation: 15,
  },
  selectedCurrencyButton: {
    backgroundColor: '#fff3b0',
    borderColor: '#3d405b',
  },
});
