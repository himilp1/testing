import React from 'react';
import { View, Text, TextInput, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/registerStyle';
import {useNavigation} from '@react-navigation/native';
const URL = "https://us-central1-plantify-d36ed.cloudfunctions.net/server";

function Register() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const navigation = useNavigation();

    const handleRegister = () => {
        fetch(URL + "/registerUser", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: password,
        })
        })
        .then(response => response.json())
        .then(data => {
            const uid= data.token.uid;
            navigation.navigate("verifyEmail", {uid, email});
        })
        .catch(error => console.error(error));
    };

    return (
        <ScrollView>
        <View style={styles.registerPage}>
                <ImageBackground source={require('../img/Monstera_half.png')} style={styles.backgroundImage}>
                    <View style={styles.registerContainer}>
                <View style={styles.registerBox}>
                    <View style={styles.registerHeader}>
                        <Text style={styles.plantifyHeader}>Plantify.</Text>
                        <Text style={styles.headerSubtext}>Sign in to get started using Plantify</Text>
                    </View>

                    <View style={styles.registerInput}>
                        <Text>First Name</Text>
                        <TextInput
                            style={styles.firstNameInput}
                            onChangeText={setFirstName}
                            value={firstName}
                        />

                        <Text>Last Name</Text>
                        <TextInput
                            style={styles.lastNameInput}
                            onChangeText={setLastName}
                            value={lastName}
                        />
                        
                        <Text>Email Address</Text>
                        <TextInput
                            style={styles.emailInput}
                            onChangeText={setEmail}
                            value={email}
                        />

                        <Text>UserName</Text>
                        <TextInput
                            style={styles.usernameInput}
                            onChangeText={setUsername}
                            value={username}
                        />

                        <Text>Password</Text>
                        <TextInput
                            style={styles.passwordInput}
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry={true}
                        />

                        <TouchableOpacity onPress={handleRegister} style={styles.registerButton}>
                            <Text style={styles.registerText}>Register</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('login')} style={styles.registerLink}>
                        <Text>Already have an account?</Text>
                    </TouchableOpacity>
                </View>
                </View>
                </ImageBackground>
            </View>
            </ScrollView>
    );
}

export default Register;