// src/components/Drawer.tsx
import React from 'react';
import styled from 'styled-components/native';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

const MenuContainer = styled.View`
  flex: 1;
  background-color: #f4f4f4; /* Light background color */
  padding: 20px;
`;

const HeaderSection = styled.View`
  padding: 20px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const SectionTitle = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #666;
`;

const DrawerMenu = (props) => {
  return (
    <MenuContainer>
      <DrawerContentScrollView {...props}>
        <HeaderSection>
          <HeaderText>Mady Game Zone</HeaderText>
        </HeaderSection>
        
        <SectionTitle>Games</SectionTitle>
        <DrawerItem
          label="Ludo"
          onPress={() => props.navigation.navigate('Ludo')}
          icon={({ color, size }) => (
            <Icon name="gamepad" color={color} size={size} />
          )}
        />
        <DrawerItem
          label="Cricket"
          onPress={() => props.navigation.navigate('Cricket')}
          icon={({ color, size }) => (
            <Icon name="gamepad" color={color} size={size} />
          )}
        />
        <DrawerItem
          label="Rummy"
          onPress={() => props.navigation.navigate('Rummy')}
          icon={({ color, size }) => (
            <Icon name="gamepad" color={color} size={size} />
          )}
        />
        <DrawerItem
          label="Football"
          onPress={() => props.navigation.navigate('Football')}
          icon={({ color, size }) => (
            <Icon name="soccer-ball-o" color={color} size={size} />
          )}
        />
        
        <SectionTitle>Settings</SectionTitle>
        <DrawerItem
          label="Profile"
          onPress={() => props.navigation.navigate('Profile')}
          icon={({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          )}
        />
        <DrawerItem
          label="About"
          onPress={() => props.navigation.navigate('About')}
          icon={({ color, size }) => (
            <Icon name="info-circle" color={color} size={size} />
          )}
        />
      </DrawerContentScrollView>
    </MenuContainer>
  );
};

export default DrawerMenu;
