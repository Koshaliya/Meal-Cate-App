import React from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return(
    <View style={styles.screen}>
        <Text >The Categories Meal Screen</Text>
        <Text>{selectedCategory.title}</Text>
        <Button title='Go to Deatils' onPress={() => {
                props.navigation.navigate({routeName:'MealDetail'})
            }}/>
    </View>
    )
}

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

//when returning dynamic values use return
    return{
    headerTitle = selectedCategory.title,
    }
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