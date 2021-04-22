import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { Provider } from 'react-redux';

import store from '../../store/index.js';
import Dashboard from '../dashboard-view/Dashboard.js'
import Search from '../search/Search.js';
import { LogOut } from '../logout/logout'


const DashboardRoute = () => <Provider store={store()}><Dashboard /></Provider>;
const SearchRoute = () => <Provider store={store()}><Search /></Provider>;
const AccountRoute = () => <LogOut />;

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
