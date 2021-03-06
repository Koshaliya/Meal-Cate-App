import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'


const CategoriesScreen = props => {
    //console log the props - each screen has prop-navigation
    const renderGridItem = itemData => {
        return (
            <CategoryGridTile title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeal',
                        params: {
                            categoryId: itemData.item.id
                        }
                    }

                    )
                }}
            />
        )
    }
    return (
        <FlatList keyExtractor={(item, index) => item.id} numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
});


export default CategoriesScreen