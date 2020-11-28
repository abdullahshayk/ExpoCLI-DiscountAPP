import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal } from 'react-native';

export default class App extends Component {
  constructor(prop){
    super(prop);
    this.state={
      OriginalPrice:0,
      OriginalPriceModal:"",
      DiscountPercentage:"",
      DiscountPercentageModal:"",
      YouSave:"You Save",
      FinalPrice:"Final Price",
      FinalPriceModal:"",
      ModalVisibility:false,
      check:false
    }
  }

  calculate=()=>{
    if(this.state.OriginalPrice===0 || this.state.DiscountPercentage==="" ){
      alert("EMPTY FIELDS!!")
      this.setState({
        check:false
      })
    }
    else if(this.state.OriginalPrice<0){
      alert("price cannot be less than 0")
      this.setState({
        check:false
      })

    }
    else if(this.state.DiscountPercentage>100){
      alert("Discount is never greater than 100")
      this.setState({
        check:false
      })

    }
    else if(this.state.DiscountPercentage<0){
      alert("Discount is never lesser than 0")
      this.setState({
        check:false
      })

    }
    else{
      const discount=this.state.OriginalPrice-(this.state.OriginalPrice*(this.state.DiscountPercentage/100));
    const saved=(this.state.OriginalPrice-this.state.OriginalPrice-(this.state.OriginalPrice*(this.state.DiscountPercentage/100)))
    this.setState({
      FinalPrice:discount,
      YouSave:Math.abs(saved),
      check:true
    })

  }}
  saveInfo=()=>{
    if(this.state.check==true){
      this.setState({
        OriginalPriceModal:this.state.OriginalPrice,
        DiscountPercentageModal:this.state.DiscountPercentage,
        FinalPriceModal:this.state.FinalPrice,
      })
      alert("Saved")
  
      
    }
    else{
      alert("empty fields")
    }
  }


  render() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:22, fontWeight:"bold", marginBottom:45 }}>DISCOUNT CALCULATOR APP</Text>
  
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




  <Modal visible={this.state.ModalVisibility}>
  <View style={styles.container}>
  <View style={{flexDirection:'row', justifyContent:"space-between" }}>
        
        <Text style={styles.Modalsitem}>Original Price</Text>
        <Text style={styles.Modalsitem}>Discount</Text>
        <Text style={styles.Modalsitem}>Final Price</Text>
  
       
  
          </View>
  <View style={{flexDirection:'row', justifyContent:"space-between" }}>
        
  <Text style={styles.Modalsitem}>{this.state.OriginalPriceModal}</Text>
  <Text style={styles.Modalsitem}>{this.state.DiscountPercentageModal}</Text>
  <Text style={styles.Modalsitem}>{this.state.FinalPriceModal}</Text>
  
       
  
          </View>
<TouchableOpacity style={styles.ModalBTN} onPress={()=>{this.setState({ModalVisibility:false})}}><Text style={{fontSize:20}}>Close</Text></TouchableOpacity>
</View>
  </Modal>
  <View style={{marginTop:33}}>
  <TouchableOpacity style={styles.EndBTN} onPress={()=>this.saveInfo()}><Text style={{fontSize:20}}>Save</Text></TouchableOpacity>
  <TouchableOpacity style={styles.EndBTN} onPress={()=>{this.setState({ModalVisibility:true})}}><Text style={{fontSize:20}}>View History</Text></TouchableOpacity>
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
    padding:8,
    width:120,
    textAlign:"center",
    alignItems:"center",
    borderRadius:19,
    margin:10

  },
  output:{
    
    fontSize:22,
    marginTop:40,
    borderWidth:1,
    color:"grey",
    
    padding:10,
    borderColor:"black",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center"

  },
  EndBTN:{
    backgroundColor:"#db7093",
    padding:8,
    width:150,
    textAlign:"center",
    alignItems:"center",
    borderRadius:19,
    margin:10
  },
  ModalVisibility: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  ModalBTN:{
    backgroundColor:"#db7093",
    position: 'absolute',
    bottom:0,
    padding:8,
    width:150,
    textAlign:"center",
    alignItems:"center",
    borderRadius:19,
    margin:10
  },
  Modalsitem:{
    marginHorizontal:20,
    top:-250
  }
});