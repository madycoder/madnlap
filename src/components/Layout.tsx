// src/components/Layout.tsx
import React from 'react';
import { SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from './Header';
import Footer from './Footer';
import Ludo from './../screens/LudoScreen';
import Cricket from './../screens/CricketScreen';
import Rummy from './../screens/RummyScreen';
import Football from './../screens/FootballScreen';
import Profile from './../screens/Profile';
import About from './../screens/About';
import DrawerMenu from './Drawer';

const Drawer = createDrawerNavigator();

const Layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerMenu {...props} />}
        screenOptions={{
          header: ({ navigation }) => <Header onDrawerToggle={navigation.toggleDrawer} />,
        }}
      >
        <Drawer.Screen name="Ludo" component={Ludo} />
        <Drawer.Screen name="Cricket" component={Cricket} />
        <Drawer.Screen name="Rummy" component={Rummy} />
        <Drawer.Screen name="Football" component={Football} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
      <Footer />
    </SafeAreaView>
  );
};

export default Layout;
