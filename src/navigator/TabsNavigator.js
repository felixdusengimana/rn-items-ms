import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import Messages from '../screens/Messages';
import Profile from '../screens/Profile';
import StackNavigator from './StackNavigator'

const Tabs = createBottomTabNavigator();
const TabsNavigator = () => {
 return (
<Tabs.Navigator screenOptions={{
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        backgroundColor: "white",
        height: 80,
        paddingBottom: 10,
        padding: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginHorizontal: 5,
        position: "absolute",
        borderColor: "white",
        elevation: 10,
    },
    tabBarButton: (props) => {
        return (
            <View {...props}>
                <View
                    style={{
                        minWidth: 50,
                        minHeight: 50,
                        borderRadius: 10,
                        backgroundColor: props.accessibilityState
                            .selected
                            ? "#34a1eb"
                            : "white",
                    }}
                >
                    <TouchableOpacity {...props} />
                </View>
            </View>
        );
    },
    // tabBarActiveTintColor: "#F7941D",
}}>
    <Tabs.Screen name="Home" component={StackNavigator} options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
        ),
    }}/>
    <Tabs.Screen name="Messages" component={Messages} 
    options={{
        tabBarIcon: ({color})=>(
        <Feather name="message-circle" size={25} color={color} />)
    }}/>
    <Tabs.Screen name="Profile" component={Profile} 
        options={{
            tabBarIcon: ({color})=>(
            <MaterialCommunityIcons name="face-woman-outline" size={25} color={color} />)
        }}/>
</Tabs.Navigator>
 );
};
export default TabsNavigator;