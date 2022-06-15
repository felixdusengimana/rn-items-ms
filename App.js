import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login from "./src/screens/Login"
import Register from './src/screens/Register'
import AddItem from './src/screens/AddItem'
import ItemsScreen from './src/screens/ItemsScreen'
import { View } from 'react-native-web';


const switchNavigation = createSwitchNavigator({
    authenticationFlow: createStackNavigator({
        signUp: Register,
        signIn: Login
    }),
    mainAppFlow: createBottomTabNavigator({
        homeAppFlow: createStackNavigator({
            home: ItemsScreen,
            // editItem: ,
            // viewItem:
        }),
        addItem: AddItem
    })
})

const App = createAppContainer(switchNavigation);

export default ()=>{
    return(
        <View><Text>Hello world</Text></View>
    )
}