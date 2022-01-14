import React from "react";
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomRoutes from "./bottomroutes";
import LoginPage from "../screens/Unlogged/Login";




const Routes = () => {

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{
                              headerShown: false }}
                               initialRouteName="LOGINN">

                <Stack.Screen  name="LOGINN" component={LoginPage}/>
                <Stack.Screen  name="BOTTON" component={BottomRoutes}/>
                {/* <Stack.Screen  name="HOME" component={Home}/> */}

            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Routes;