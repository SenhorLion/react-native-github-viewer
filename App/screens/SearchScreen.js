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

export default class SearchScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Search',
      headerLeft: (
        <Button
          title="Back"
          onPress={() => navigation.navigate('Login')}
          color="#a41034"
        />
      )
    };
  };

  handleSearch = () => {
    console.log('handleSearch');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Search Screen</Text>
        <Button title="Search" onPress={() => this.handleSearch()} />
      </View>
    );
  }
}
