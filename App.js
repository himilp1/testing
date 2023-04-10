import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/login';
import Register from './pages/register';
import HomeScreen from './pages/homeScreen';
import MyPlantBase from './pages/myPlantBase';
import IndividualPage from './pages/individualPage';
import AddPlant from './pages/addPlant';
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
        <Stack.Screen name="myPlantBase" component={MyPlantBase}></Stack.Screen>
        <Stack.Screen name="Individual" component={IndividualPage}></Stack.Screen>
        <Stack.Screen name="addPlant" component={AddPlant}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
