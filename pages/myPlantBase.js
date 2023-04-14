import React from 'react';
import { View, Text, ScrollView, Image} from 'react-native';
import Pin from '../components/Pin';
import styles from '../styles/myPlantBaseStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import plant1 from '../img/plant1.jpeg';
import plant2 from '../img/plant2.jpeg';
import plant3 from '../img/plant3.jpeg';
import plant4 from '../img/plant4.jpeg';
import plant5 from '../img/plant5.jpeg';
import plant6 from '../img/plant6.jpeg';
import plant7 from '../img/plant7.jpeg';

const data = [
  { id: 1, pinSize: "medium", img: plant1 },
  { id: 2, pinSize: "small", img: plant2 },
  { id: 3, pinSize: "small", img: plant3 },
  { id: 4, pinSize: "large", img: plant4 },
  { id: 5, pinSize: "medium", img: plant5 },
  { id: 6, pinSize: "small", img: plant6 },
  { id: 7, pinSize: "large", img: plant7 },
];
const firstColumn = [];
const secondColumn = [];
splitData();

function splitData(){
  for(let i = 0; i < data.length; i++){
    if(i % 2 == 0)
      firstColumn.push(data[i]);
    else
      secondColumn.push(data[i]);
  }
}

function MyPlantBase({route}) {
  const {user} = route.params;
  const navigation = useNavigation();
  
  const addPlant = () =>{
    navigation.navigate("addPlant", {user: user});
  }
  const plantPage = () =>{
    navigation.navigate("Individual")
  }
  const renderColumn = (column) => {
    return column.map(item => (
      <View key={item.id}>
        <TouchableOpacity onPress={plantPage}>
          <Pin pinSize={item.pinSize} img={item.img}></Pin>
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.navBar}>
        <View style={styles.navLeft}>
          <View style={styles.backButton}>
            <TouchableOpacity>
              <Icon name="arrow-left" size={25} color="#D1C3A7"></Icon>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.navRight}>
          <View style={styles.notificationButton}>
            <TouchableOpacity>
              <Icon name ="bell" size ={25} color="#D1C3A7"></Icon>
            </TouchableOpacity>
          </View>
          <View style={styles.profilePicture}>
            <TouchableOpacity>
              <Image source={plant1} style={{width: 30, height: 30, borderRadius: 20,}}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.plantBaseHeader}>
        <Text style={styles.plantBaseTitle}>Your Plantbase</Text>
        <View style={styles.headerIcons}>
          <View style={styles.addPlant}>
            <TouchableOpacity onPress={addPlant}
            style={{borderRadius: 15,borderWidth: 1,padding: 10, backgroundColor: "#385250",alignItems: 'center'}}>
              <Icon name="plus" size={30} color="white"></Icon>
            </TouchableOpacity>
            <Text>Add Plant</Text>
          </View>
          <View style={styles.organizePlant}>
            <TouchableOpacity style={{borderRadius: 15,borderWidth: 1,padding: 10, backgroundColor: "#385250",alignItems: 'center'}}>
              <Icon name="list" size={30} color="white"></Icon>
            </TouchableOpacity>
            <Text>Organize</Text>
          </View>
          <View style={styles.plantToDos}>
            <TouchableOpacity style={{borderRadius: 15,borderWidth: 1,padding: 10, backgroundColor: "#385250",alignItems: 'center'}}>
              <Icon name="check-circle" size={30} color={"white"}></Icon>
            </TouchableOpacity>
            <Text style={{fontSize: 15,}}>To-Dos</Text>
          </View>
        </View>
      </View>
      <View style={styles.plantPicsContainer}>
        <View style={styles.plantPic}>
          {renderColumn(firstColumn)}
        </View>
        <View style={styles.plantPic}>
          {renderColumn(secondColumn)}
        </View>
      </View>
    </ScrollView>
  );
}

export default MyPlantBase;
