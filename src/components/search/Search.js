import * as React from 'react';
import { Searchbar, Button, Surface, Chip, Snackbar, Portal, Dialog } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { searchCurrency, updateTicker, loadPrices } from '../../store/collection.reducer.js';
import { IfStart, startObject } from '../If/IfStart';
import { IfSearch, searchFalse } from '../If/IfSearch';
import { IfTarget, searchTrue } from '../If/IfTarget';
import { IfUri, checkUri } from '../If/IfUri';
import { SvgUri } from 'react-native-svg';


function Search(props) {


  const [visibleThree, setVisibleThree] = React.useState(false);

  // const showModal = () => setVisibleTwo(true);
  const hideModalTwo = () => setVisibleThree(false);

  const [visibleTwo, setVisibleTwo] = React.useState(false);

  // const showModal = () => setVisibleTwo(true);
  const hideModal = () => setVisibleTwo(false);
  // const containerStyle = {backgroundColor: 'white', padding: 20};

  const [visible, setVisible] = React.useState(false);

  const onDismissSnackBar = () => setVisible(false);

  const [searchTarget, setSearchCurrency] = useState([]);

  const handleSubmit = () => {
    console.log('BUTTON PRESS HANDLE SUBMIT', props.collection.currency);
    storeData([...props.collection.currency, props.searchTarget.currency]);
    props.updateTicker(props.searchTarget.currency);
    setVisibleTwo(false);
    setVisibleThree(true);
  }
  
  const handleSubmitCancel = () => {
    setVisibleTwo(false);
  }

  const handleSubmitExit = () => {
    setVisibleThree(false);
  }


  const handleSearch = () => {
    props.searchCurrency(searchTarget);
    setVisible(!visible);
  }
  
  const handleSubmitConfirm = () => {
    setVisibleTwo(true);
  }

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@collection', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  const getData = async () => {

    try {
      const value = await AsyncStorage.getItem('@collection')
      if (value === null) {
        storeData(['BTC', 'ETH']);
        props.setTicker(['BTC', 'ETH'])
      } else {
        props.setTicker(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  }



  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#002244', '#A5acaf', 'transparent']}
        style={styles.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Surface style={styles.surface}>
          <Searchbar
            placeholder="Search"
            onChangeText={text => setSearchCurrency(text.toUpperCase())}
            name="ticker"
            type="text"
            required
          />
        </Surface>
        <Surface style={styles.surfaceTwo}>
          <Button mode="contained" onPress={handleSearch} style={styles.button}>
            Search Cryptocurrency
        </Button>
        </Surface>
      </LinearGradient>
      <IfStart condition={startObject(props.searchTarget)}>
        <IfTarget condition={searchTrue(props.searchTarget)}>
          <View style={styles.chips}>
            <Portal>
              <Dialog visible={visibleTwo} onDismiss={hideModal} style={styles.addModal}>
                <LinearGradient
                  colors={['#002244', '#A5acaf', 'transparent']}
                  style={styles.backgroundTwo}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 2, y: 3 }}
                >
                  <Dialog.Title style={styles.dialogTitle}>Add {props.searchTarget.currency} to Collection?</Dialog.Title>
                  <View style={styles.modalButtonContainer}>
                    <Button style={styles.modalButtonOne} onPress={handleSubmit}>Confirm</Button>
                    <Button style={styles.modalButtonTwo} onPress={handleSubmitCancel}>Cancel</Button>
                  </View>
                </LinearGradient>
              </Dialog>
            </Portal>
            <Portal>
            <Dialog visible={visibleThree} onDismiss={hideModalTwo} style={styles.addModal}>
                <LinearGradient
                  colors={['#002244', '#A5acaf', 'transparent']}
                  style={styles.backgroundTwo}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 2, y: 3 }}
                >
                  <Dialog.Title style={styles.dialogTitleTwo}>Added to Collection!</Dialog.Title>
                  <Button style={styles.modalButtonThree} onPress={handleSubmitExit}>Dismiss</Button>
                </LinearGradient>
              </Dialog>
            </Portal>
            <Chip avatar={<IfUri condition={checkUri(props.searchTarget)}><SvgUri uri={props.searchTarget.logo_url} height="40" width="40" /></IfUri>} onPress={handleSubmitConfirm}>Add {props.searchTarget.currency} to Collection</Chip>
          </View>
        </IfTarget>
        <IfSearch condition={searchFalse(props.searchTarget)}>
          <Snackbar
            style={styles.snackbar}
            theme={{ colors: { surface: '#09FF00', accent: '#A5acaf', onSurface: '#002244' } }}
            visible={visible}
            onDismiss={onDismissSnackBar}
            action={{
              label: 'BACK',
              onPress: () => {
                // Do something
              },
            }}>
            Invalid Crypto Ticker... Try Again!
      </Snackbar>
        </IfSearch>
      </IfStart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#002244',
    height: 115,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 25,
    color: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '33%',
    marginTop: '15%',
  },
  surface: {
    elevation: 12,
    marginTop: 250,
    marginRight: 40,
    marginLeft: 40,
  },
  button: {
    height: 50,
    paddingTop: 8,
    borderRadius: 25,
    width: 310,
    alignContent: 'center'
  },
  surfaceTwo: {
    elevation: 12,
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    borderBottomStartRadius: 25,
    borderTopEndRadius: 25,
    borderRadius: 25,
    alignItems: 'center',
  },
  chips: {
    height: 50,
    marginTop: 700
  },
  snackbar: {
    marginVertical: -30,
    borderRadius: 25,
    shadowOffset: { width: 0, height: 5, },
    shadowColor: '#09FF00',
    shadowOpacity: 1.0,
  },
  addModal: {
    height: 176,
    backgroundColor: '#002244',
    borderWidth: 2,
    borderColor: '#A5acaf',
    borderRadius: 25,
    shadowOffset: { width: 0, height: 0, },
    shadowColor: '#09FF00',
    shadowOpacity: 1.0,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    marginLeft: 79,
    marginTop: 25,
    fontFamily: "SFUIDisplay-Bold"
  },
  dialogTitle: {
    marginLeft: 73,
    color: '#09FF00',
    marginTop: 40,
  },
  backgroundTwo: {
    borderRadius: 25,
    height: 170,
  },
  dialogTitleTwo: {
    marginLeft: 85,
    color: '#09FF00',
    marginTop: 40,
  },
  modalButtonThree: {
    marginTop: 20
  }
});

const mapStateToProps = state => {
  return {
    searchTarget: state.collection.search,
    collection: state.collection
  }
}

const mapDispatchToProps = {
  searchCurrency,
  updateTicker,
  loadPrices
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
