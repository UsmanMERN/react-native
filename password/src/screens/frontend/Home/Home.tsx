import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

// form validation

import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
const passwordSchema = Yup.object().shape({
    passwordLength: Yup.number().min(4, 'Password at least 4 characters').max(16, 'Password should be at most 16 characters').required('Password length is required'),
});

export default function Home() {

    const [password, setPassword] = useState('');
    const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
    const [lowerCase, setLowerCase] = useState(true);
    const [upperCase, setUpperCase] = useState(false);
    const [number, setNumber] = useState(false);
    const [symbols, setSymbols] = useState(false);
    const [isprocessing, setIsProcessing] = useState(false);

    const generatePasswordString = (passwordLength: number) => {
        let characterList = '';
        setIsProcessing(true);

        if (upperCase) { characterList += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' }
        if (lowerCase) { characterList += 'abcdefghijklmnopqrstuvwxyz' };
        if (number) { characterList += '0123456789' };
        if (symbols) { characterList += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" };

        const passwordResult = createPassword(characterList, passwordLength);
        setIsPasswordGenerated(true);
        setPassword(passwordResult);
        setIsProcessing(false);
    };


    const createPassword = (characters: string, passwordLength: number) => {
        let result = '';
        for (let i = 0; i < passwordLength; i++) {
            const characterIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(characterIndex);
        }
        return result;
    };
    const resetPassword = () => {
        setPassword('');
        setNumber(false);
        setUpperCase(false);
        setLowerCase(true);
        setIsPasswordGenerated(false);
        setSymbols(false);
    };
    return (
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scrollViewContent}>
            <SafeAreaView style={styles.safeAreaContainer}>
                <Text style={styles.title}>Password Generator</Text>
                <Formik
                    initialValues={{ passwordLength: '' }}
                    validationSchema={passwordSchema}
                    onSubmit={({ passwordLength }) => generatePasswordString(Number(passwordLength))}
                >
                    {({ values, errors, touched, handleChange, handleSubmit }) => (

                        <>
                            <View style={styles.inputWrapperForChecboxes}>
                                <Text style={styles.label}>Password Length:</Text>
                                <TextInput style={styles.textInput} value={values.passwordLength} onChangeText={handleChange('passwordLength')} keyboardType="numeric" placeholder="Ex. 9" />
                            </View>
                            <View style={styles.errorContainer}>{touched.passwordLength && errors.passwordLength && (
                                <Text style={styles.errorMessage}>{errors.passwordLength}</Text>
                            )}</View>
                            <View style={styles.inputWrapperForChecboxes}>
                                <Text style={styles.heading}>Include LowerCase</Text>
                                <BouncyCheckbox disableBuiltInState isChecked={lowerCase} fillColor="#29ab87" onPress={() => setLowerCase(!lowerCase)} />
                            </View>
                            <View style={styles.inputWrapperForChecboxes}>
                                <Text style={styles.heading}>Include Uppercase</Text>
                                <BouncyCheckbox disableBuiltInState isChecked={upperCase} fillColor="#eb5e28" onPress={() => setUpperCase(!upperCase)} />
                            </View>
                            <View style={styles.inputWrapperForChecboxes}>
                                <Text style={styles.heading}>Include Character</Text>
                                <BouncyCheckbox disableBuiltInState isChecked={symbols} fillColor="#98c1d9" onPress={() => setSymbols(!symbols)} />
                            </View>
                            <View style={styles.inputWrapperForChecboxes}>
                                <Text style={styles.heading}>Include Number</Text>
                                <BouncyCheckbox disableBuiltInState isChecked={number} fillColor="#ffd166" onPress={() => setNumber(!number)} />
                            </View>
                            <View style={styles.formActions}>
                                <TouchableOpacity style={styles.button} disabled={isprocessing} onPress={() => handleSubmit()}>
                                    <Text style={styles.buttonText}>Generate Password</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={() => resetPassword()}>
                                    <Text style={styles.buttonText}>Reset Password</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )}
                </Formik>
                {isPasswordGenerated && <View style={[styles.resultContainer, styles.evalution]}>
                    <Text style={styles.resultText}>Generated Password:</Text>
                    <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
                    <Text style={styles.description}>Long Press to Copy</Text>
                </View>}

            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    safeAreaContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 20,
    },
    errorContainer: {
        alignSelf: 'flex-start',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: 'center',
    },
    inputWrapper: {
        marginBottom: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'column',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        alignSelf: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 16,
        width: 80,
    },
    passwordErrorMessage: {
        color: 'red',
        fontSize: 12,
    },
    formActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        backgroundColor: '#007bff',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '48%', // Adjust as needed
    },
    buttonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    heading: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    inputWrapperForChecboxes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    errorMessage: {
        color: 'red',
        fontSize: 12,
        alignSelf: 'center',
    },
    resultContainer: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    evalution: {
        backgroundColor: '#f0f0f0', // Light gray background color
        elevation: 12,
        shadowOffset: {
            width: 1, height: 1,
        },
    },
    resultText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#000',
    },
    description: {
        fontSize: 12,
        color: '#888',
        marginBottom: 5,
        fontWeight: 'bold',
    },
    generatedPassword: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#000',
        fontSize: 18,
    },
});
