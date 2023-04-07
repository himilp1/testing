import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';


const UserProfile = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  
  return (
    <ScrollView style={styles.entireScreen}>
      <View style={styles.container}>
        <View style={styles.profileHeader}>
          <View style={styles.profilePicContainer}>
            <View style={styles.profilePicWrapper}>
              <Image source={{ uri: image }} style={styles.profilePic} />
              {image && <Image source={{ uri: image }} style={styles.profilePic} />}
            </View>
            <TouchableOpacity style={styles.cameraIcon} onPress={pickImage}>
              <Image source={require('/Users/mihir.ar/Downloads/Client-Mobile-main/img/icons8-potted-plant-96.png')} style={styles.cameraImage} />
            </TouchableOpacity>
          </View>
          <Text style={styles.username}>Grant</Text>
        </View>
          <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>3 Lifetime Plants</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>Joined: 01/01/2022</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <Text style={styles.menuItem}>Settings</Text>
          <Text style={styles.menuItem}>Logout</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  entireScreen:{
    backgroundColor: "#fff7e9",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff7e9",
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHeader: {
    paddingTop: 200,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicWrapper: {
    position: 'relative',
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },
  profilePic: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#385250',
  },
  cameraIcon: {
    backgroundColor: "#fff7e9",
    borderWidth: 1,
    borderColor: '#385250',
    borderRadius: 80,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: -5,
    right: -5,
  },
  cameraImage: {
    width: 40,
    height: 40,
  },
  username: {
    fontFamily: 'Kabel-Black',
    fontSize: 45,
    color: '#385250',
    paddingTop: 20,
  },
  stat: {
    alignItems: 'center',
    paddingTop: 20,
  },
  statNumber: {
    fontFamily: 'Josefin Sans',
    fontSize: 24,
    color: '#385250',
  },
  statTitle: {
    fontFamily: 'Josefin Sans',
    fontSize: 16,
    color: '#385250',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  menuItem: {
    fontFamily: 'Kabel-Black',
    fontSize: 25,
    color: '#FFFFFF',
    backgroundColor: '#385250',
    borderRadius: 20,
    height: 60,
    width: 180,
    textAlign: 'center',
    borderWidth: 1,
    borderColor:  '#fff7e9',
    marginLeft: 7,
    overflow: 'hidden',
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  
});
export default UserProfile;
