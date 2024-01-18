import { NavigationContainer} from '@react-navigation/native'
import AppBarBottom from './AppBar/AppBarBottom'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/home'
import ProfileScreen from '../screens/profile'
import UserEdit from './User/UserEdit'

const Stack = createNativeStackNavigator()

function AppBarStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='AppBarBottom' 
                component={AppBarBottom}
                options={{
                    headerShown: false
                }}
            ></Stack.Screen>
        </Stack.Navigator>    
    )
}


export default function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='AppBarBottom'>
                <Stack.Screen 
                    name='AppBarBottom' 
                    component={AppBarBottom}
                    options={{
                        headerShown: false
                    }}
                ></Stack.Screen>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name="profile" component={ProfileScreen} />
                <Stack.Screen name='edit' component={UserEdit}></Stack.Screen>
            </Stack.Navigator>

            
        
        </NavigationContainer>    
    )
}