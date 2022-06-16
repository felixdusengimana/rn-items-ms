import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Messages from '../screens/Messages';
import Profile from '../screens/Profile';
import StackNavigator from './StackNavigator'

const Tabs = createBottomTabNavigator();
const TabsNavigator = () => {
 return (
<Tabs.Navigator>
    <Tabs.Screen name="Home" component={StackNavigator} options={{
  headerShown: false
  }}/>
    <Tabs.Screen name="Messages" component={Messages} />
    <Tabs.Screen name="Profile" component={Profile} />
</Tabs.Navigator>
 );
};
export default TabsNavigator;