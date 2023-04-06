import React from 'react';
import { View , Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/myPlantBaseStyle';
import Pin from '../components/Pin';
import plant1 from '../img/plant1.jpeg';

function MyPlantBase(){


  return(
    <View>
        <Text>Your PlantBase</Text>
        <View style={styles.addPlantBox}>
          <TouchableOpacity style={styles.plantPics}>
            <Pin pinSize={"large"} style={styles.plantPic}></Pin>
            <Pin pinSize={"large"} img={plant1}></Pin>
            <Pin pinSize={"large"} img={plant1}></Pin>
            <Pin pinSize={"large"} img={plant1}></Pin>
            <Pin pinSize={"large"} img={plant1}></Pin>
            <Pin pinSize={"large"} img={plant1}></Pin>
            <Pin pinSize={"large"} img={plant1}></Pin>
            <Pin pinSize={"large"} img={plant1}></Pin>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default MyPlantBase;