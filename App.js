import React, { Component } from "react";
import { createAppContainer,  createSwitchNavigator , } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import main from "./src/screens/main/index";
import barcode from "./src/screens/barcode/inde";
import combustivel from "./src/screens/combustivel/index";
import filtro from "./src/screens/filtro/index";
import lista from "./src/screens/list/index";
import details from "./src/screens/details/index";
import {  Avatar2 } from './src/screens/main/styles'
const TabNavigator = createBottomTabNavigator({
  Combustivel: {
    screen:combustivel,
    navigationOptions: {
      tabBarLabel:" ",
      tabBarIcon: ({ tintColor }) => (
        <Avatar2   source={require('./src/assets/fuelstation.png')} /> 
      )
     
    },
  },
  BarCode:{ 
    screen:barcode,
    navigationOptions: {
      tabBarLabel:" ",
      tabBarIcon: ({ tintColor }) => (
        <Avatar2   source={require('./src/assets/bar_code.png')} />
      )
    },
  },
  Filtro:{ 
    screen:filtro,
    navigationOptions: {
      tabBarLabel:" ",
      tabBarIcon: ({ tintColor }) => (
        <Avatar2   source={require('./src/assets/filter.png')} />
      )
    },
  },
  List:{ 
    screen:lista,
    navigationOptions: {
      tabBarLabel:" ",
      tabBarIcon: ({ tintColor }) => (
        <Avatar2   source={require('./src/assets/clipboard.png')} />
      )
    },
  }
  
},
{
  tabBarOptions : {
    style: {
      borderTopColor: '#fff',
      borderColor:'#fff',
      backgroundColor: '#fff',
    }
  }
});
  const navigator = createStackNavigator({
    Post: {
      screen: main,
      navigationOptions: {
        header: null
      }
    },
    Tab:{
      screen: TabNavigator,
      navigationOptions: {
        header: null
      }
    },
    Detail:{
      screen: details,
      navigationOptions: {
        header: null
      }
    },
  })

  export default createAppContainer(navigator);