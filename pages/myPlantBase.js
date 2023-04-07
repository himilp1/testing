import React from 'react';
import { View, Text, Image } from 'react-native';
import Waterfall from 'react-native-waterfall';
import Pin from '../components/Pin';
import plant1 from '../img/plant1.jpeg';

const data = [
  { id: 1, pinSize: "medium", img: plant1 },
  { id: 2, pinSize: "large", img: plant1 },
  { id: 3, pinSize: "small", img: plant1 },
  { id: 4, pinSize: "medium", img: plant1 },
  { id: 5, pinSize: "small", img: plant1 },
  { id: 6, pinSize: "large", img: plant1 },
  { id: 7, pinSize: "medium", img: plant1 },
  { id: 8, pinSize: "small", img: plant1 },
];


function MyPlantBase() {
  const renderItem = ({ item }) => {
    console.log('line 21 item:', data[1].pinSize);
    return (
      <View style={{ margin: 10 }}>
        <Pin pinSize={data[1].pinSize} img={data[1].img}></Pin>
      </View>
    );
  };
  
  
  console.log("printing data before return function: " + data);
  return (
    <View style={{ flex: 1 }}>
      <Text>Your PlantBase</Text>
      <Waterfall
        data={data}
        renderItem={renderItem}
        columnCount={2}
        gap={10}
      />

    </View>
  );
}

export default MyPlantBase;
