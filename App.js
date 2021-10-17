import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WaterScreen from "./Screens/Water"
import MedicineScreen from "./Screens/Medicine"
import UtilitiesScreen from "./Screens/Utilities"
export default class App extends React.Component{
  render(){
    return(<AppContainer/>)
  }
}
const TabNavigator= createBottomTabNavigator({
  Medicine: {screen: MedicineScreen},
  Water: {screen: WaterScreen},
  Utilities: {screen: UtilitiesScreen}
})
const AppContainer= createAppContainer(TabNavigator)
