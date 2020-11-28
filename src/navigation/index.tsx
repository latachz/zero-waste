import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Main from '../screens/Main';
import Scanner from '../screens/Scanner';
import Competitions from '../screens/Competitions';
import Friends from '../screens/Friends';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen
        name="Friends"
        component={Friends}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Competitions"
        component={Competitions}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

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
              component={MainDrawer}
              options={{headerShown: false}}
            />
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
