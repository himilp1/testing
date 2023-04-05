import React from 'react';
import { View, Text, TextInput, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/loginStyle';
import { auth } from '../firebase';
import {useNavigation} from '@react-navigation/native';

function Login() {
    const navigation = useNavigation();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleLogin = () => {
    console.log("in handlelogin");
       auth.signInWithEmailAndPassword(username, password)
          .then((userCredential) => {
            // Signed in
            navigation.navigate("home");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      };
      

    return (
            <View style={styles.loginPage}>
                <ImageBackground source={require('../img/Monstera_half.png')} style={styles.backgroundImage}>
                    <View style={styles.loginContainer}>
                <View style={styles.loginBox}>
                    <View style={styles.loginHeader}>
                        <Text style={styles.plantifyHeader}>Plantify.</Text>
                        <Text style={styles.headerSubtext}>Sign in to get started using Plantify</Text>
                    </View>

                    <View style={styles.loginInput}>
                        <Text>Email or username</Text>
                        <TextInput
                            style={styles.emailInput}
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

                        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('register')} style={styles.loginLink}>
                        <Text>Don't have an account yet?</Text>
                    </TouchableOpacity>
                </View>
                </View>
                </ImageBackground>
            </View>
    );
}

export default Login;