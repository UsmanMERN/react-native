import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import type { PropsWithChildren } from 'react';

import diceOne from './assets/One.png';
import diceTwo from './assets/Two.png';
import diceThree from './assets/Three.png';
import diceFour from './assets/Four.png';
import diceFive from './assets/Five.png';
import diceSix from './assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <>
      <View>
        <Image style={styles.diceImage} source={imageUrl} />
      </View>
    </>
  );
};

const App = (): JSX.Element => {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(diceOne);


  const rollDiceOnTap = () => {
    const diceImages = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];
    const randomNumber = Math.floor(Math.random() * 6);
    setDiceImage(diceImages[randomNumber]);
  };


  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDicebtnText}>Roll the Dice</Text>
      </Pressable>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceImage: {
    height: 200,
    width: 200,
  },
  rollDicebtnText: {
    borderWidth: 2,
    borderColor: '#8ecae6',
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 40,

  },

});
