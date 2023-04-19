// toDo.js
import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const data = [
  { id: 1, name: 'Plant 1', img: require('../img/plant1.jpeg'), water: true, care: false },
  { id: 2, name: 'Plant 2', img: require('../img/plant2.jpeg'), water: false, care: true },
  { id: 3, name: 'Plant 3', img: require('../img/plant3.jpeg'), water: true, care: true },
  { id: 4, name: 'Plant 4', img: require('../img/plant4.jpeg'), water: false, care: false },
  { id: 5, name: 'Plant 5', img: require('../img/plant5.jpeg'), water: true, care: false },
  { id: 6, name: 'Plant 6', img: require('../img/plant6.jpeg'), water: false, care: true },
  { id: 7, name: 'Plant 7', img: require('../img/plant7.jpeg'), water: true, care: true },
];

function ToDo() {
  const [completedTasks, setCompletedTasks] = useState([]);

  const toggleTaskCompletion = (plantId, task) => {
    const taskKey = `${plantId}-${task}`;
    if (completedTasks.includes(taskKey)) {
      setCompletedTasks(completedTasks.filter((t) => t !== taskKey));
    } else {
      setCompletedTasks([...completedTasks, taskKey]);
    }
  };

  const renderTaskBubble = (plant, task) => {
    const taskKey = `${plant.id}-${task}`;
    const isCompleted = completedTasks.includes(taskKey);
  
    return (
      <TouchableOpacity
        style={[styles.taskBubble, isCompleted && styles.completedTaskBubble]}
        onPress={() => toggleTaskCompletion(plant.id, task)}
      >
        <Text style={styles.taskBubbleText}>{task}</Text>
        {isCompleted && (
          <View style={styles.checkmarkContainer}>
            <Icon name="checkmark" size={20} color="#000000" />
          </View>
        )}
      </TouchableOpacity>
    );
  };
  
  

  const renderPlant = (plant) => {
    return (
      <View key={plant.id} style={styles.toDoPlantItem}>
        <Image source={plant.img} style={styles.toDoPlantImage} />
        <View style={styles.toDoPlantInfo}>
          <Text style={styles.toDoPlantName}>{plant.name}</Text>
          <View style={styles.taskContainer}>
            {plant.water && renderTaskBubble(plant, 'Water')}
            {plant.care && renderTaskBubble(plant, 'Take care')}
          </View>
        </View>
      </View>
    );
  };

  const plantsToDo = data.filter((plant) => plant.water || plant.care);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.toDoHeader}>
        <Text style={styles.toDoTitle}>To-Do</Text>
      </View>
      <View style={styles.toDoList}>
        {plantsToDo.map((plant) => renderPlant(plant))}
      </View>
    </ScrollView>
  );
}

export default ToDo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7E9",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFF7E9",
  },
  toDoHeader: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingTop: 60,
    backgroundColor: "#385250",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  toDoTitle: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    fontFamily: 'Kabel-Black',
  },
  toDoList: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  toDoPlantItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#FFF7E9",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  toDoPlantImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 20,
  },
  toDoPlantInfo: {
    flexDirection: "column",
  },
  toDoPlantName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#385250",
  },
  taskContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  taskBubble: {
    backgroundColor: "#385250",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  completedTaskBubble: {
    backgroundColor: "rgba(194, 194, 194, 0.5)",
  },  
  taskBubbleText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  checkmarkContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },  
});
  