import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

//Takes the font downloads and applies them
const customFonts = {
  'Kabel-Black': require('assets/fonts/Kabel-Black.ttf'),
  'JosefinSans-Regular': require('assets/fonts/JosefinSans-Regular.ttf'),
};

//Back button function 
const BackButton = () => {
  const navigation = useNavigation();
  
  const handlePress = () => {
    navigation.goBack();
    console.log('Back button pressed');
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image style={styles.backButton} source={require('assets/icons8-back-arrow-100.png')} />
    </TouchableOpacity>
    
  );
};

function individualPage() {
  const [fontsLoaded, setFontsLoaded] = useState(false);


  useEffect(() => {
    async function loadFontsAsync() {
      await Font.loadAsync(customFonts);
      setFontsLoaded(true);
    }

    loadFontsAsync();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  //<NavigationContainer>{<BackButton />}</NavigationContainer>
 return (
    <View style={styles.plantPage}>
      <View style={styles.plantContainer}>
        <BackButton />
        <View style={styles.plantImageContainer}>
          <Image source={require('assets/plant7-1.png')} style={styles.plantImage} />
        </View>
        <View style={styles.plantBioContainer}>
          <Text style={styles.singlePlantHeader}>Your Plant Name</Text>
          <Text style={styles.singlePlantDescription}>Do elit excepteur cillum in deserunt nulla dolor commodo anim mollit consequat. </Text>
        </View>
        <View style={styles.plantBioContainer}>
        <Text style={styles.singlePlantHeader}>Suggested Care:</Text>
          <View style={styles.plantDetails}>
            <View style={styles.plantDetail}>
              <Image
                source={require('assets/waterdrop-1.png')}
                style={styles.waterIcon}
              />
              <Text style={styles.plantSubtitles}>Water:</Text>
            </View>
            <Text style={[styles.singlePlantDescription, styles.waterDescription]}>Whenever you want idk</Text>
            <View style={styles.plantDetail}>
              <Image
                source={require('assets/sun-1.png')}
                style={styles.sunIcon}
              />
              <Text style={[styles.plantSubtitles, styles.sunTitle]}>Sun:</Text>
            </View>
            <Text style={[styles.singlePlantDescription, styles.sunDescription]}>A lot or a little maybe</Text>
          </View>
        </View>
        <View style={styles.plantBioContainer}>
          <Text style={styles.singlePlantHeader}>Progress:</Text>
            <Text style={styles.plantSubtitles}>Last Watered:</Text>
            <Text style={styles.singlePlantDescription}>7 Days Ago </Text>
            <Text style={styles.plantSubtitles}>Should Water:</Text>
            <Text style={styles.singlePlantDescription}>Today </Text>
          </View>
      </View>
    </View>
 );
}

export default individualPage;

const styles = StyleSheet.create({
  plantPage: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    backgroundColor: "#fff7e9",
  },
  plantBaseIcon: {
    marginBottom: 16,
  },
  plantContainer: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'column',
  },
  plantImageContainer: {
    marginBottom: 5,
  },
  plantImage: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  plantBioContainer: {
    borderRadius: 20,
    backgroundColor:  '#385250',
    padding: 16,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  singlePlantHeader: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: 'Kabel-Black',
    color: '#fff',
  },
  plantSubtitles: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff',
    fontFamily: 'JosefinSans-Regular',
    
  },
  singlePlantDescription: {
    fontSize: 16,
    marginBottom: 16,
    color: '#385250',
    fontFamily: 'JosefinSans-Regular',
    color: '#fff',
    
  },
  waterDescription: {
    marginLeft: -20,
  },
  sunDescription: {
    marginLeft: -20,
  },
  sunTitle: {
    marginLeft: 5,
  },
  waterIcon: {
    width: '7%',
    height: '100%',
    marginRight: 10,
    marginLeft: -15,
    resizeMode: 'contain',
  },
  sunIcon: {
    width: '18%',
    height: '100%',
    marginRight: -10,
    marginLeft: -32,
  },
  plantDetails: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginHorizontal: 20,
    marginTop: 20,
  },
  plantDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    position: 'absolute',
    marginLeft: 10,
    marginTop: 10,
    width: 45,
    height: 45,
    resizeMode: 'contain',
    zIndex: 999,
  },
});