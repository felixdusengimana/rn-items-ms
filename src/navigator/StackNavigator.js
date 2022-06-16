import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../screens/Home';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';


const Stack = createStackNavigator();
const StackNavigator = () => {
 return (
<Stack.Navigator>
<Stack.Screen name="Home" component={Home} 
 options={{
    title: 'Home',
    headerStyle: {
      backgroundColor: '#09f'    
    },
  }}
  />
<Stack.Screen name="Messages" component={Messages} />
<Stack.Screen name="Profile" component={Profile} />
<Stack.Screen name="Cart" component={Cart} />
</Stack.Navigator>
 );
};
export default StackNavigator;
