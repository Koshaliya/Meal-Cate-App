import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';


import MealsNavigator from './navigation/MealsNavigator';

// import AppLoading from 'expo-app-loading';
// import * as Font from 'expo-font' 
// import {useScreens} from 'react-native-screens'  or enableScreens
//install expo font
//install react navigation - for native apps - version 3/4 - smooth experince
//install react-native-screens
//install createBottomTabNavigator
//npm install --save react-navigation-header-buttons
//npm                                -material-bottom-tabs
//npm                react-native-paper

//load Async returns a promise

useScreens()

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  })
}


 export default function App() {

  const [dataLoaded,setDataLoaded] = useState(false)

  if(!dataLoaded){
    return (
    <AppLoading 
    startAsync={fetchFonts} 
    onFinish={()=>setDataLoaded(true)} 
    onError={(err) => console.log(err)}
    />
    )
  }

    return (
    <MealsNavigator/>
  );

}

const styles = StyleSheet.create({
  screen:{
    flex:1,
  },
  
});
