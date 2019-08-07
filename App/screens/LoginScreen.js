import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  },
  text: {
    textAlign: 'center'
  }
});

export default class LoginScreen extends React.Component {
  login = () => {
    this.props.navigation.navigate('Main');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You are currently logged out.</Text>
        <Button title="Press to Log In" onPress={this.login} />
      </View>
    );
  }
}
