import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Logged/Home/home";
import { Image } from "react-native";


const Tab = createBottomTabNavigator();

const BottomRoutes = () => {



    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#01c0f8',
                tabBarInactiveTintColor: 'black',
              }}
            >
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: () => (
                    <Image source={require('../../src/img/icone-casa.png')} style={{height:25, width:25}}/>
                )
            }}
            />

            {/* <Tab.Screen
            name="Adicionar"
            component={Historic}
            options={{
                tabBarIcon: ({size, color}) => (
                    <Image source={require('../../src/img/icone-mais.png')} style={{height:45, width:45, marginBottom:10}}/>
                )
            }}
            
            />

            <Tab.Screen
            name="Calendario"
            component={Profile}
            options={{
                tabBarIcon: ({size, color}) => (
                    <Image source={require('../../src/img/icone-calendario.png')} style={{height:25, width:25}}/>
                )
            }}
            
            /> */}
        </Tab.Navigator>
    )
}

export default BottomRoutes;