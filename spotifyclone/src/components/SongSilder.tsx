import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import { useProgress } from 'react-native-track-player';

const SongSilder = () => {
    const { position, duration } = useProgress();
    // Function to format time in minutes:seconds format
    function formatTime(milliseconds: number) {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    return (
        <View>
            <Slider value={position} minimumValue={0} maximumValue={duration} thumbTintColor="#fff" maximumTrackTintColor="#FFF" style={styles.sliderContainer} />
            <View style={styles.timeContainer}>
                <Text style={styles.time}>{formatTime(position)}</Text>
                <Text style={styles.time}>{formatTime(duration - position)}</Text>
            </View>
        </View>
    );
};

export default SongSilder;

const styles = StyleSheet.create({
    sliderContainer: {
        width: 350,
        height: 40,
        marginTop: 25,

        flexDirection: 'row',
    },
    timeContainer: {
        width: 340,

        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    time: {
        color: '#fff',
    },
});
