// src/screens/SignUpScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from './../../store/authSlice';
import axios from 'axios';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    // Basic validation to ensure all fields are filled
    if (name && email && password) {
      try {
        // Send API request to sign up the user
        const response = await axios.post('http://192.168.43.250:5000/api/auth/signup', {
          name,
          email,
          password,
        });

        // If signup is successful, handle the response
        if (response.data.success) {
          const user = { name, email }; // Prepare user object
          dispatch(login(user)); // Dispatch login action
          Alert.alert('Sign Up Successful', `Welcome, ${name}!`); // Use name in alert
          navigation.navigate('Login'); // Navigate to Ludo after sign up
        } else {
          // If API indicates failure, show an alert
          Alert.alert('Sign Up Failed', response.data.message || 'Please try again.');
        }
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Something went wrong. Please try again.'); // Handle errors
      }
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Text style={styles.switchText} onPress={() => navigation.navigate('Login')}>
        Already have an account? Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  switchText: {
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
  },
});

export default SignUpScreen;
