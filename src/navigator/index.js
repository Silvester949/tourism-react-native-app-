import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';
import {BottomTabBar} from '../components/BottomTabBar/BottomTabBar.component';

// Signed In
import {Profile} from '../screens/private/Profile/Profile.screen';
import {Favorites} from '../screens/private/Favorites/Favorites.screen';
import {Home} from '../screens/private/Home/Home.screen';

// Signed Out
import {Introduction} from '../screens/public/Introduction';
import {Welcome} from '../screens/public/Welcome';
import {Login} from '../screens/public/Login';
import {Signup} from '../screens/public/Signup';
import {ForgotPassword} from '../screens/public/ForgotPassword';
import {SelectedPlace} from '../screens/private/SelectedPlace/SelectedPlace.screen';
import {Profileinfo} from '../screens/private/ProfileInfo/ProfileInfo.screen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBar={props => <BottomTabBar {...props} />}
    screenOptions={{
      keyboardHidesTabBar: true,
      headerShown: false,
    }}>
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

const SignedOutStack = () => (
  <Stack.Navigator
    initialRouteName="Introduction"
    headerMode="none"
    mode="modal"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Introduction" component={Introduction} />
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

const SignedInStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'MainStack'}
      headerMode="none"
      mode="modal"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainStack" component={MainStack} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileInfo" component={Profileinfo} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SelectedPlace" component={SelectedPlace} />
    </Stack.Navigator>
  );
};

const Routes = props => {
  const dispatch = useDispatch();
  const [userSignedIn, setUserSignedIn] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const checkUserSignedIn = async () => {
    const userSignedInStatus = await AsyncStorage.getItem('@userSignedIn');
    const userData = JSON.parse(userSignedInStatus);

    if (userSignedInStatus !== null && userData && userData.token) {
      // dispatch(setUserData(userData));
      if (userData && userData.token) {
        Axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`;
        setUserSignedIn(true);
      }
      return true;
    }

    Axios.defaults.headers.common.Authorization = null;
    return false;
  };

  useEffect(() => {
    checkUserSignedIn().then(() => setIsMounted(true));
  }, []);

  return (
    isMounted && (
      <Stack.Navigator
        initialRouteName={userSignedIn ? 'SignedOut' : 'SignedIn'}
        headerMode="none"
        mode="card"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SignedIn" component={SignedInStack} />
        <Stack.Screen name="SignedOut" component={SignedOutStack} />
      </Stack.Navigator>
    )
  );
};

export default Routes;
