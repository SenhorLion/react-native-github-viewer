import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation';
import { fetchUserRepos, fetchUserBio } from './api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class App extends React.Component {
  state = {
    isLoading: true,
    data: [],
    profile: [],
    error: null
  };

  componentDidMount() {
    this.fetchRepos();
    this.fetchProfile();
  }

  fetchRepos = async () => {
    try {
      const userRepos = await fetchUserRepos('senhorlion');

      this.setState({ data: [...userRepos], error: null, isLoading: false });
    } catch (error) {
      this.setState({ data: [], error: error.message, isLoading: false });
    }
  };
  fetchProfile = async () => {
    try {
      const userProfile = await fetchUserBio('senhorlion');

      this.setState({ profile: [...userProfile], error: null, isLoading: false });
    } catch (error) {
      this.setState({ profile: [], error: error.message, isLoading: false });
    }
  };

  renderItem = item => {
    return (
      <View>
        <Text>Repo name: {item.name}</Text>
      </View>
    );
  };

  render() {
    // const { data, error, isLoading } = this.state;

    // return (
    //   <View style={styles.container}>
    //     {isLoading && <Text>Loading...</Text>}
    //     {error && <Text>Error: {error}</Text>}
    //     {!isLoading && data.length && data.map(this.renderItem)}
    //   </View>
    // );

    return <AppNavigator />;
  }
}
