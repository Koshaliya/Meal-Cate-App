import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native'
import { MEALS } from '../data/dummy-data'


//wrap with imageBackground - which is in and above the image
//{...styles.container,...{backgroundColor: props.color} - merging the styles -pull out all key value pairs

const MealItem = props => {
    return (
        <TouchableOpacity onPress={props.onSelectMeal}>
            <View>
                <View style={{...styles.mealRow,...styles.mealHeader}}>
                    <ImageBackground source={{uri:props.image}} style={styles.bgImage}>
                        <View style={styles.titleContainer}>
                    <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                    </View>
                    </ImageBackground>
                </View>

                <View style={{...styles.mealRow,...styles.mealDetail}}>

                    <Text>
                        {props.duration}m
                    </Text>
                    <Text>
                        {props.complexity.toUpperCase()}
                    </Text>
                    <Text>
                        {props.affordabilty.toUpperCase()}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mealItem:{
        height:200,
        width:'100%',
        backgroundColor:'#f5f5f5',
        borderRadius:10,
        overflow:  'hidden',
        marginVertical:10
    },
    mealRow:{
        flexDirection:'row',
    },
    mealHeader:{
        height:'85%'
    },
    mealDetail:{
        height:'15%',
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center'
    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
    },
    titleContainer:{
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingVertical:5,
        paddingHorizontal:12,
    }
    ,
    title:{
        fontFamily:'open-sans-bold',
        fontSize:22,
        color:'white',
        textAlign:'center'
    }
});


export default MealItem