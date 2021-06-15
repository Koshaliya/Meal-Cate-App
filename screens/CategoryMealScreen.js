import React from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'



const CategoryMealScreen = props => {
    return(
    <View style={styles.header}>
        <Text >The Categories Meal Screen</Text>
        <Button title='Go to Deatils' onPress={() => {
                props.navigation.navigate({routeName:'MealDetail'})
            }}/>
    </View>
    )
}

//navigate / push - already on_go over and over again / boBack() / pop()-only in stackNavi / popToTop()
//replace - login can't go back - empty the stack

const styles = StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
});


export default CategoryMealScreen