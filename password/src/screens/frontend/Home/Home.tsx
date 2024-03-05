import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

// form validation

import * as Yup from 'yup';
const PaswordSchema = Yup.object().shape({
    PaswordLength: Yup.number().min(4, 'should be min 4 character').max(16, 'should be min 16 character').required('password is required'),
});

export default function Home() {

    const [password, setPassword] = useState('');
    const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [upperCase, setUpperCase] = useState(false);
    const [number, setNumber] = useState(false);
    const [symbols, setSymbols] = useState(false);

    const generatePasswordString = (PaswordLength: number) => {
    }
    const createPassword = (PaswordLength: number) => {
    }
    const resetPassword = (PaswordLength: number) => {
    }

    return (
        <View>
            <Text>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
