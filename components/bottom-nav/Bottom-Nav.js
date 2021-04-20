import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

const MusicRoute = () => <Text>Dashboard</Text>;

const AlbumsRoute = () => <Text>Search</Text>;

const RecentsRoute = () => <Text>Team</Text>;

export default function Bottom() {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'music', title: 'Dashboard', icon: 'home-analytics' },
      { key: 'albums', title: 'Search', icon: 'album' },
      { key: 'recents', title: 'Account', icon: 'account-box' },
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
      music: MusicRoute,
      albums: AlbumsRoute,
      recents: RecentsRoute,
    });
    

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
