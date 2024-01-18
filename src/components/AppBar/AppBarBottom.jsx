import React from "react"
import { StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../../screens/home";


const Tab = createBottomTabNavigator()

const AppBarBottom = () => {
    return(
        <Tab.Navigator initialRouteName='Inicio'>
            <Tab.Screen 
                name='Inicio' 
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <Icon 
                            name='home'
                            color='#166D6B'
                            size={35}
                        />   
                    )
                }}
            ></Tab.Screen>

            <Tab.Screen 
                name='Perfil' 
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <Icon 
                            name='search'
                            color='#166D6B'
                            size={35}
                        />   
                    )
                }}
            ></Tab.Screen>

            <Tab.Screen 
                name='Hola' 
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <Icon 
                            name='add'
                            color='#166D6B'
                            size={35}
                        />   
                    )
                }}
            ></Tab.Screen>

            <Tab.Screen 
                name='1' 
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <Icon 
                            name='notifications'
                            color='#166D6B'
                            size={35}
                        />   
                    )
                }}
            ></Tab.Screen>


            <Tab.Screen
                name='2' 
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <Icon 
                            name='settings'
                            color='#166D6B'
                            size={35}
                        />   
                    )
                }}
            ></Tab.Screen>

        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    appBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 80,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export default AppBarBottom