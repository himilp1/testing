import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import MyPlantBase from './myPlantBase';
import { getUserImages } from '../data';
import { ScrollView } from 'react-native-gesture-handler';
import { deleteObject, ref } from 'firebase/storage';
import { getStorage } from 'firebase/storage';
import { Alert } from 'react-native';

//Takes the font downloads and applies them
const customFonts = {
 'Kabel-Black': require('../assets/fonts/Kabel-Black.ttf'),
 'JosefinSans-Regular': require('../assets/fonts/JosefinSans-Regular.ttf'),
};

function IndividualPage({route}) {
 const [fontsLoaded, setFontsLoaded] = useState(false);
 const [plantData, setPlantData] = useState(null);
 const { userId, plantId } = route.params;
 const navigation = useNavigation();


  useEffect(() => {
    async function loadFontsAsync() {
      await Font.loadAsync(customFonts);
      setFontsLoaded(true);
    }

    loadFontsAsync();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const plantImages = await getUserImages(userId);
      const selectedPlant = plantImages.find(plant => plant.id === plantId);
      setPlantData(selectedPlant);
    }
    if (fontsLoaded) {
      fetchData();
    }
  }, [userId, plantId, fontsLoaded, route.params]); // Add route.params to the dependency array
  

  if (!fontsLoaded || !plantData) {
    return null;
  }

  const handleDeletePlant = async () => {
    try {
      const storage = getStorage();
      const imagePath = `users/${userId}/plants/${plantId}`;
      const imageRef = ref(storage, imagePath);
      
      // Delete the image from Firebase Storage
      await deleteObject(imageRef);
  
      // Call the parent component's onDelete callback to update the PlantBase state
      if (route.params.onPlantDelete) {
        route.params.onPlantDelete(plantId);
      }
  
      // Navigate back to the PlantBase
      navigation.goBack();
    } catch (error) {
      console.error("Error deleting plant: ", error);
      Alert.alert("Error", "Failed to delete plant.");
    }
  };
  
  const handlePlantUpdate = () => {
    async function fetchData() {
      const plantImages = await getUserImages(userId);
      const selectedPlant = plantImages.find(plant => plant.id === plantId);
      setPlantData(selectedPlant);
    }
    fetchData();
  };


 console.log("The information reached the individual page: " + JSON.stringify(plantData, null, 2));
return (
  <ScrollView>
   <View style={styles.plantPage}>
     <View style={styles.plantContainer}>
       <View style={styles.plantImageContainer}>
         <Image source={{ uri: plantData.img }} style={styles.plantImage} />
       </View>
       <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditPlant', { user: userId, plantId: plantData.id, plantData, handlePlantUpdate })}
          style={styles.editBtn}
        >
          <Text style={styles.editBtnText}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleDeletePlant}
          style={styles.deleteBtn}
        >
          <Text style={styles.deleteBtnText}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>


       <View style={styles.plantBioContainer}>
         <Text style={styles.singlePlantHeader}>{plantData.species}</Text>
         <Text style={styles.singlePlantDescription}>{plantData.description} </Text>
       </View>
       <View style={styles.plantBioContainer}>
       <Text style={styles.singlePlantHeader}>Suggested Care:</Text>
         <View style={styles.plantDetails}>
           <View style={styles.plantDetail}>
             <Image
               source={require('../assets/waterdrop-1.png')}
               style={styles.waterIcon}
             />
             <Text style={styles.plantSubtitles}>Water:</Text>
           </View>
           <Text style={[styles.singlePlantDescription, styles.waterDescription]}>Whenever you want idk</Text>
           <View style={styles.plantDetail}>
             <Image
               source={require('../assets/sun-1.png')}
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
   </ScrollView>
);
}


export default IndividualPage;



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
   width: '69%',
   height: 250,
   borderRadius: 8,
   alignSelf: 'center',
   resizeMode: 'cover',
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
   zIndex: 1,
 },
 buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  paddingTop: 5,
  paddingBottom: 5,
},
editBtn: {
  backgroundColor: "black",
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderRadius: 30,
  marginRight: 10,
},
editBtnText: {
  fontSize: 16,
  color: "#FFFFFF",
  fontWeight: "600",
  fontFamily: 'Kabel-Black',
},
deleteBtn: {
  backgroundColor: '#FF4F4F',
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderRadius: 30,
  marginLeft: 10,
},
deleteBtnText: {
  fontSize: 16,
  color: "#FFFFFF",
  fontWeight: "600",
  fontFamily: 'Kabel-Black',
},


});
