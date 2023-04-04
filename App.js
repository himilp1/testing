import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/login';
import Register from './pages/register';
const Stack = createStackNavigator();
import * as Font from 'expo-font';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
