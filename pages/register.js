import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/registerStyle';

export default function Register({ navigation }) {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleLogin = () => {
        console.log("firstName: " + firstName);
        
    };

    return (
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
                            style={styles.style.firstNameInput}
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
                            value={username}
                        />

                        <Text>UserName</Text>
                        <TextInput
                            style={styles.usernameInput}
                            onChangeText={setUsername}
                            value={password}
                        />

                        <Text>Password</Text>
                        <TextInput
                            style={styles.passwordInput}
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry={true}
                        />

                        <TouchableOpacity onPress={handleLogin()} style={styles.loginButton}>
                            <Text style={styles.loginText}>Register</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('login')} style={styles.registerlink}>
                        <Text>Already have an account?</Text>
                    </TouchableOpacity>
                </View>
                </View>
                </ImageBackground>
            </View>
    );
}