import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
export default class WaterScreen extends React.Component{
  render(){
    return(
        <View style={styles.container}>
          <View>
            <Image
              source={require("../assets/waterImage.jpg")}
              style={{width:200, height: 200}}/>
            <Text style={{textAlign: 'center', fontSize: 30}}>Water Screen</Text>
          </View>
          <View style={styles.inputView}>
          <TextInput 
            style={styles.inputBox}
            placeholder="Total Water Requirement"
            onChangeText= {(text)=>{this.setState({title: text})}}
            value={this.state.title}/>
          </View>
          <View style={styles.inputView}>
          <TextInput 
            style={styles.inputBox}
            placeholder="Water Count"
            onChangeText= {(text)=>{this.setState({author: text})}}
            value={this.state.author}/>
          
          </View>
          
          <TouchableOpacity 
            style={styles.scanButton}
            onPress={()=>{
              this.submitStory()
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