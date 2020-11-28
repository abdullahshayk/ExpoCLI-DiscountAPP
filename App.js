import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends Component {
  render() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:22, fontWeight:"bold" }}>DISCOUNT CALCULATOR APP</Text>
      <View style={{flexDirection:'row', }}>
      <TextInput style={styles.input} placeholder="Original price" placeholderTextColor="blue"/>
      <TextInput style={styles.input} placeholder="Discount %" placeholderTextColor="blue"/>
        </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    margin:7,
    borderRadius:9,
    height:30,
    width:130,
    textAlign:"center"
    
  }
});