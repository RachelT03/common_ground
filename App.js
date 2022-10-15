import React, { useState } from 'react';
import sdk from './src/config';
import Dashboard from './src/components/Dashboard.js';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
} from 'react-native';
import { Client, Account, ID } from 'appwrite';
const account = new Account(sdk);

function App() {

  const [alert, setAlert] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const account = new Account(sdk);
  function handleSubmit() {
    const promise = account.create(name, email, password);

    promise.then(function (response) {
      console.log(response); // Success
    }, function (error) {
      console.log(error); // Failure
    });
    <Dashboard></Dashboard>
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>{alert}</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={nameText => setName(nameText)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={nameEmail => setEmail(nameEmail)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={namePassword => setPassword(namePassword)}
        />
        <Button title="Sign Up" onPress={() => handleSubmit()} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
  },
});

export default App;