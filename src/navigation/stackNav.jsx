
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UsersScreen from '../containers/usersScreen';
import ProfileDetails from '../containers/profileDetails';

const Stack = createStackNavigator();

 function ComponentsNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown:false }} initialRouteName="UsersScreen">
                <Stack.Screen  name="UsersScreen" component={UsersScreen}/>
                <Stack.Screen name="ProfileDetails" component={ProfileDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
    
}



export default ComponentsNavigation;