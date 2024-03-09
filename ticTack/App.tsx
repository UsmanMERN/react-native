import React, { useState } from 'react';
import { Alert, FlatList, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function App() {
  const [playerTurn, setPlayerTurn] = useState<'X' | 'O'>('X');
  const [gameState, setGameState] = useState<(null | 'X' | 'O')[]>(Array(9).fill(null));

  const handlePress = (index: number) => {
    if (gameState[index] === null) {
      // Update game state with current player's mark
      const newGameState = [...gameState];
      newGameState[index] = playerTurn;
      setGameState(newGameState);

      setPlayerTurn(playerTurn === 'X' ? 'O' : 'X');
      const winner = calculateWinner(newGameState);
      const isBoardFull = newGameState.every(square => square !== null);

      if (winner) {
        Alert.alert(`Player ${winner} wins!`);
        resetGame();
      } else if (isBoardFull) {
        Alert.alert("It's a draw!");
        resetGame();
      }
    }
  };

  const resetGame = () => {
    setGameState(Array(9).fill(null));
    setPlayerTurn('X');
  };

  const calculateWinner = (squares: (null | 'X' | 'O')[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  };

  const renderItem = ({ item, index }: { item: null | 'X' | 'O', index: number }) => (
    <Pressable style={styles.button} onPress={() => handlePress(index)}>
      {item === 'X' && <Icon name="close" size={40} color="#F7CD2E" />}
      {item === 'O' && <Icon name="circle-outline" size={40} color="#38CC77" />}
      {item !== 'X' && item !== 'O' && <Icon size={40} name="pencil" color="#0d0d0d" />}
    </Pressable>
  );

  return (
    <View style={styles.body}>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topBtn}>
          <Text style={styles.headerText}>Player {playerTurn}'s Turn</Text>
        </View>
        <View style={styles.buttonContainer}>
          <FlatList
            data={gameState}
            numColumns={3}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.boardStyle}
          />
        </View>
        <View style={styles.reloadGame}>
          <TouchableOpacity onPress={resetGame}>
            <Text style={styles.headerText}>Reload Game</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#ff5e5b',
    paddingVertical: 20,
    alignItems: 'center',
  },
  topBtn: {
    marginBottom: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  button: {
    height: 100,
    width: 100,
    borderColor: '#000',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  boardStyle: {
    marginLeft: 35,
  },
  reloadGame: {
    marginVertical: 30,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 5
  },
  image: {
    height: 200,
    width: 200,
  }
});
