import { StyleSheet, View } from 'react-native';
import React, { useCallback } from 'react';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Pressable } from 'react-native';
export default function ControllCenter() {

  const playBackState = usePlaybackState();

  const skipToNext = useCallback(async () => {
    await TrackPlayer.skipToNext();
  }, []);

  const skipToPrevious = useCallback(async () => {
    await TrackPlayer.skipToPrevious();
  }, []);

  //Previous Button
  const togglePlayBack = async (playBack: any) => {
    const currentTrack = await TrackPlayer.getActiveTrack();
    if (currentTrack !== null) {
      if (playBack === State.Paused || playBack === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
    console.log(' jhi:>> ',);
  };


  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <Icon name="skip-previous" size={40} style={styles.icon} />
      </Pressable>
      <Pressable onPress={() => togglePlayBack(playBackState)}>
        <Icon name={playBackState === State.Playing ? 'pause' : 'play-arrow'} size={75} style={styles.icon} />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon name="skip-next" size={40} style={styles.icon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 24,
  },
});
