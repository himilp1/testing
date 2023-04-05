import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { auth, getAuth} from '../firebase';

function HomeScreen({ route }) {
  const [user, setUser] = useState(null);
  const { uid } = route.params;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <View>
      <Text>{user ? `Welcome ${user.email}` : 'Loading...'}</Text>
    </View>
  );
}

export default HomeScreen;
