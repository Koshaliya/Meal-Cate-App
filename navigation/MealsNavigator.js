import Colors from '../constants/Colors'
import {createStackNavigator,createAppContainer} from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

const MealNavigator = createStackNavigator({
    Categories: {
        screen:CategoriesScreen,
        // navigationOptions:{
        //     headerTitle:'Meal Categories'
        // }
    },
    CategoryMeal:{
        screen:CategoryMealScreen,
        //can add navigation Options here
    },
    MealDetail:MealDetailScreen
},{
    // mode:'modal', animation changes
    // initialRouteName: 'MealDetail',
    defaultNavigationOptions:{
        headerStyle:Colors.primaryColor,
        headerTintColor:'white'
    }
}
)

export default createAppContainer(MealNavigator);


//can set default values after screen
//wrap with app container
//react navigator by default inside safe area view

