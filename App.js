import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(prop){
    super(prop);
    this.state={
      OriginalPrice:0,
      DiscountPercentage:0,
      YouSave:"You Save",
      FinalPrice:"Final Price"
    }
  }

  calculate=()=>{
    const discount=this.state.OriginalPrice-(this.state.OriginalPrice*(this.state.DiscountPercentage/100));
    const saved=(this.state.OriginalPrice-this.state.OriginalPrice-(this.state.OriginalPrice*(this.state.DiscountPercentage/100)))
    this.setState({
      FinalPrice:discount,
      YouSave:Math.abs(saved)
    })

  }
  render() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:22, fontWeight:"bold" }}>DISCOUNT CALCULATOR APP</Text>
  
      <View style={{flexDirection:'row', }}>
        
      <TextInput style={styles.input} placeholder="Original price" placeholderTextColor="blue" keyboardType="number-pad"
      onChangeText={(OriginalPrice)=> this.setState({OriginalPrice})}/>

      <TextInput style={styles.input} placeholder="Discount %" placeholderTextColor="blue" keyboardType="number-pad"
       onChangeText={(DiscountPercentage)=> this.setState({DiscountPercentage})}/>

        </View>
<TouchableOpacity style={styles.CalculateBTN} onPress={()=>this.calculate()}><Text style={{fontSize:20}}>Calculate</Text></TouchableOpacity>

        <View >
  <Text style={styles.output}>{this.state.FinalPrice}</Text>
  <Text style={styles.output}>{this.state.YouSave}</Text>

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
    textAlign:"center",
   
    
  },
  CalculateBTN:{
    backgroundColor:"#87cefa",
    height:30,
    width:120,
    textAlign:"center",
    alignItems:"center",
    borderRadius:12,
    margin:10

  },
  output:{
    
    fontSize:22,
    marginTop:20,
    borderWidth:1,
    padding:10,
    borderColor:"black",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center"

  }
});