<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/login';
import Register from './pages/register';
import HomeScreen from './pages/homeScreen';
const Stack = createStackNavigator();
import { useFonts } from 'expo-font';

function App() {

  const [loaded] = useFonts({
    'Kabel-Black': require('./assets/fonts/Kabel-Black.ttf'),
    'Josefin Sans': require('./assets/fonts/JosefinSans-VariableFont_wght.ttf'),
  });

  if (!loaded) {
    return null; // Render a loading screen or placeholder component while the font is loading
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}}>
        <Stack.Screen name="login" component={Login}></Stack.Screen>
        <Stack.Screen name="register" component={Register}></Stack.Screen>
        <Stack.Screen name="home" component={HomeScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
>>>>>>> d97413f5c2a5b9910d55701da721844f20356da7
