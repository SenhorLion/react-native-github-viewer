import React from 'react';
import {
  ActivityIndicator,
  Button,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30, // TODO: no magic numbers
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    // marginRight: 5,
    fontSize: 23,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: '#48BBEC'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  buttonTextDisabled: {
    color: '#ccc'
  },
  button: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 20,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'red'
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

  state = {
    error: false,
    isLoading: false,
    username: ''
  };

  handleChange = event => {
    this.setState({
      username: event.nativeEvent.text
    });
  };

  handleSearch = () => {
    this.setState({ isLoading: true });
    // TODO: Handle seach functionality
  };

  render() {
    const { error, username, isLoading } = this.state;
    const showError = error ? (
      <Text style={styles.errorText}> {error} </Text>
    ) : (
      <View />
    );
    const isDisabled = error || !username.length;

    const buttonTextStyles = [styles.buttonText];

    if (isDisabled) {
      buttonTextStyles.push(styles.buttonTextDisabled);
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}> Search for a Github User </Text>
        <TextInput
          style={styles.searchInput}
          value={username}
          onChange={this.handleChange}
        />
        <TouchableOpacity
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSearch}
          disabled={!!isDisabled}
        >
          <Text style={buttonTextStyles}> SEARCH </Text>
        </TouchableOpacity>
        <ActivityIndicator animating={isLoading} color="#111" size="large" />
        {showError}
      </View>
    );
  }
}
