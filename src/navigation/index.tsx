import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Main from '../screens/Main';
import Scanner from '../screens/Scanner';
import Competitions from '../screens/Competitions';
import Friends from '../screens/Friends';

const Stack = createStackNavigator();

export default function Navigation() {
  const isLoggedIn = useSelector((store: any) => store.global.isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Main"
              component={Friends}
              options={{headerShown: false}}
            />
            {/* <Stack.Screen
              name="Friends"
              component={Friends}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Competitions"
              component={Competitions}
              options={{headerShown: false}}
            /> */}
            <Stack.Screen
              name="Scanner"
              component={Scanner}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
