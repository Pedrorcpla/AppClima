import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Touchable } from 'react-native';

export default function HomeScreen({navigation}) {
 return (
    <>
    <View style={styles.bloco}>
        <Text>Olá mundo Teste</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    bloco:{
        flex: 1, 
    }
});
