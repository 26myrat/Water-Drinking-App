import React from 'react'
import {Text, View, TouchableOpacity, StyleSheet, TextInput, Image, Alert} from 'react-native'
import db from "../Config"
export default class WaterScreen extends React.Component{
  constructor (){
    super()
    this.state= {totalWater:0, waterCount:0, editText:true}
  }
  componentDidMount(){
    this.getWaterCount()
  }
  getWaterCount =()=>{
    let refPath = 'waterCount/';
      let classRef = db.ref(refPath);
      classRef.on("value",(data)=>{
       let wc_data = data.val()
       this.setState({totalWater:wc_data.totalWater, waterCount:wc_data.waterCount})
       let more_water = wc_data.totalWater - wc_data.waterCount
       
       if(more_water>0)
       {
        Alert.alert("you need "+more_water +"gallons of water more for today ")
       }
      })
  }
    submitwater=()=>{
     
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
  
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
  
      today = dd + '-' + mm + '-' + yyyy;
     
  
      let refPath = 'waterCount/';
      let classRef = db.ref(refPath);
      classRef.update({
        waterCount: this.state.waterCount,
        totalWater: this.state.totalWater
      })
    }
  render(){
    return(
        <View style={styles.container}>
          <View>
            <Image
              source={require("../assets/waterImage.png")}
              style={{width:200, height: 200}}/>
            <Text style={{textAlign: 'center', fontSize: 30}}>Water Screen</Text>
          </View>
          <View style={styles.inputView}>
          <TextInput 
            style={styles.inputBox}
            placeholder="Total Water Requirement"
            onChangeText= {(text)=>{this.setState({totalWater: text})}}
            value={this.state.totalWater}
            edita/>
          </View>
          <View style={styles.inputView}>
          <TextInput 
            style={styles.inputBox}
            placeholder="Water Count"
            onChangeText= {(text)=>{this.setState({waterCount: text})}}
            value={this.state.waterCount}/>
          
          </View>
          
          <TouchableOpacity 
            style={styles.scanButton}
            onPress={()=>{
              this.submitwater()
            }}>
            <Text style={styles.buttonText}>Submit</Text>
            
          </TouchableOpacity>
        </View>
      );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      fontSize: 20
    },
    scanButton:{
      backgroundColor: '#66BB6A',
      width: 50,
      borderWidth: 1.5,
      borderLeftWidth: 0
    }
  });