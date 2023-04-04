import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/login';
import Register from './pages/register';
const Stack = createStackNavigator();
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIh7DUEk1IWjz3aW7PgLQjFhlZEW9jZIg",
  authDomain: "plantify-d36ed.firebaseapp.com",
  projectId: "plantify-d36ed",
  storageBucket: "plantify-d36ed.appspot.com",
  messagingSenderId: "804312353430",
  appId: "1:804312353430:web:5a4054446a35dcd3c1d0b7",
  measurementId: "G-GZ0TBCSS23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
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
