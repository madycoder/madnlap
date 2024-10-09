// src/App.tsx
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './../store/store';
import Layout from './components/Layout';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './auth/LoginScreen';
import SignUpScreen from './auth/signup';
import { login } from './../store/authSlice';
import { retrieveToken } from './../utils/auth';
import { useDispatch } from 'react-redux';

const Stack = createStackNavigator();

const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkToken = async () => {
      const token = await retrieveToken();
      if (token) {
        dispatch(login({ token }));
      }
    };

    checkToken();
  }, [dispatch]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Main" component={Layout} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppContent />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
