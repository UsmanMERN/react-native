import { Track } from "react-native-track-player";

export const playListData: Track[] = [
    {
        id: 1,
        title: 'Maan Meri Jaan',
        artist: 'King',
        album: 'Champange Talk',
        artwork: 'https://via.placeholder.com/150', // Dummy image URL
        url: require('./assets/one.mp3'),
    },
    {
        id: 2,
        title: 'Another Song Title',
        artist: 'Different Artist',
        album: 'Another Album',
        artwork: 'https://via.placeholder.com/150', // Dummy image URL
        url: require('./assets/two.mp3'),
    },
    {
        id: 3,
        title: 'Beautiful Day',
        artist: 'U2',
        album: "All That You Can't Leave Behind",
        artwork: 'https://via.placeholder.com/150', // Dummy image URL
        url: require('./assets/three.mp3'),
    },
    {
        id: 4,
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        album: 'A Night at the Opera',
        artwork: 'https://via.placeholder.com/150', // Dummy image URL
        url: require('./assets/four.mp3'),
    },
    {
        id: 5,
        title: 'Imagine',
        artist: 'John Lennon',
        album: 'Imagine',
        artwork: 'https://via.placeholder.com/150', // Dummy image URL
        url: require('./assets/five.mp3'),
    },
    {
        id: 6,
        title: 'Hey Jude',
        artist: 'The Beatles',
        album: 'Past Masters',
        artwork: 'https://via.placeholder.com/150', // Dummy image URL
        url: require('./assets/six.mp3'),
    },
];
