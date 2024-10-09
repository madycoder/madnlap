// components/Footer.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Ludo')} style={styles.menuItem}>
        <Icon name="gamepad" size={20} color="#fff" />
        <Text style={styles.footerText}>Ludo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Rummy')} style={styles.menuItem}>
        <Icon name="gamepad" size={20} color="#fff" />
        <Text style={styles.footerText}>Rummy</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Football')} style={styles.menuItem}>
        <Icon name="gamepad" size={20} color="#fff" />
        <Text style={styles.footerText}>Football</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cricket')} style={styles.menuItem}>
        <Icon name="gamepad" size={20} color="#fff" />
        <Text style={styles.footerText}>Cricket</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Ensure the icon and text are centered
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#007AFF',
  },
  footerText: {
    color: '#fff',
  },
});

export default Footer;
