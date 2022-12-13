import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from './components/HomeScreen';
import SaoPaulo from './components/SaoPaulo';
import Peruibe from './components/Peruibe';
import Santos from './components/Santos';
import Maua from './components/Maua';
import Itanhaem from './components/Itanhaem';

const Stack = createNativeStackNavigator();

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator style={styles.header}>
        <Tab.Screen name="São Paulo" component={SaoPaulo} />
        <Tab.Screen name="Peruibe" component={Peruibe} />
        <Tab.Screen name="Itanhaem" component={Itanhaem} />
        <Tab.Screen name="Santos" component={Santos} />
        <Tab.Screen name="Maua" component={Maua} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header:{
      marginTop: '5%'
  }
});
