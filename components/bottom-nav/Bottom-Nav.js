import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Dashboard from '../../src/components/dashboard-view/Dashboard.js'
import { Provider } from 'react-redux';
import store from '../../src/store/index.js';

const DashboardRoute = () => <Provider store={store()}><Dashboard /></Provider>;

const SearchRoute = () => <Text>Search</Text>;

const AccountRoute = () => <Text>Team</Text>;

export default function Bottom() {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'dashboard', title: 'Dashboard', icon: 'home-analytics' },
      { key: 'search', title: 'Search', icon: 'skull-scan' },
      { key: 'account', title: 'Account', icon: 'account-box' },
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
      dashboard: DashboardRoute,
      search: SearchRoute,
      account: AccountRoute,
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
