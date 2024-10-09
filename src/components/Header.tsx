// src/components/Header.tsx
import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HeaderContainer = styled.View`
  background-color: #3498db;
  padding: 20px;
  flex-direction: row;
  align-items: center;
`;

const HeaderText = styled.Text`
  color: white;
  font-size: 24px;
  flex: 1;
  text-align: center;
`;

const Header = ({ onDrawerToggle }) => {
  return (
    <HeaderContainer>
      <TouchableOpacity onPress={onDrawerToggle}>
        <MaterialIcons name="menu" size={28} color="white" />
      </TouchableOpacity>
      <HeaderText>Mady Game Zone</HeaderText>
    </HeaderContainer>
  );
};

export default Header;
