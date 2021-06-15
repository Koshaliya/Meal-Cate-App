import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font' 

import MealsNavigator from './navigation/MealsNavigator';

//install expo font
//load Aync returns a promise
//install react navigation - for native apps - version 3/4 - smooth experince


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
