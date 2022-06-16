import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from './src/navigator/TabsNavigator';


export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      <TabsNavigator/>
      {/* <DrawerNavigator/> */}
    </NavigationContainer>
  );
}
