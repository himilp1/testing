import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/verifyEmailStyle.js';
import {getAuth, sendSignInLinkToEmail} from 'firebase/auth';
import {firebase} from '../firebase.js';

const auth = getAuth();

function VerifyEmail({route}){
    const {user, email} = route.params;
    const actionCodeSettings = {
        url: "plantify-d36ed.firebaseapp.com",
        handleCodeInApp: true,
    }
    const sendEmail = () =>{
        sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() =>{
            console.log("link sent successfuly");
            window.localStorage.setItem("emailForSignIn", email);
        })
        .catch((error) =>{
            console.log(error.message);
        })
    }
    return(
        <ScrollView>
            <View style={styles.verifyPage}>
                <ImageBackground source={require("../img/Monstera_half.png")} style={styles.backgroundImage}>
                    <View style={styles.verifyContainer}>
                        <View style={styles.verifyBox}>
                            <Text>
                                Please check your inbox for a verification email
                            </Text>
                            <TouchableOpacity onPress={sendEmail}>
                                <Text>
                                    Send Verification Email
                                </Text>
                            </TouchableOpacity>
                        </View> 
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    )
}

export default VerifyEmail;