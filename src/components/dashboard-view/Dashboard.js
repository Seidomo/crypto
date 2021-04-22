import * as React from 'react';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { SvgUri } from 'react-native-svg';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, Title, IconButton, Surface, Button, Searchbar, Dialog, Portal, DataTable } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

import { loadPrices, updateTicker, setTicker } from '../../store/collection.reducer.js';


function Dashboard(props) {

  const [visible, setVisible] = useState(false);
  const [modalInformation, setModal] = useState([{name:''}]);
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const showDialog = (name) => {
    let target = props.collection.prices.filter(crypto => crypto.currency === name);
    setModal(target);
    setVisible(true)
  };
  const hideDialog = () => setVisible(false);

  const [addCurrency, setCurrency] = useState();

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
      if(value === null) {
        storeData(['BTC', 'ETH']);
        props.setTicker(['BTC', 'ETH'])
      }else{
        props.setTicker(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  }

  useEffect(() => {
    getData();
  }, [])



  useEffect(() => {
    if(props.collection.currency.length > 0){
      props.loadPrices();
    }
  }, [props.collection.currency]);

  const handleSubmit = () => {
    storeData([...props.collection.currency, addCurrency]);
    props.updateTicker(addCurrency);
  }

  const deleteItem = (target) => {
    let newCollection = props.collection.currency.filter(currency => currency !== target);
    storeData(newCollection);
    props.setTicker(newCollection);
  }


  return (
    <LinearGradient
    colors={['#002244', '#A5acaf', 'transparent']}
    style={styles.background}
    start={{ x: 0, y: 0}}
    end={{ x: 1, y: 1 }}
    >
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <View>
        <Text>Add Currency to Collection</Text>
        <Searchbar
          placeholder="Search"
          onChangeText={text => setCurrency(text)} 
          name="ticker"
          type="text"
          required
        />
        <Button mode="contained" onPress={handleSubmit}>
          Add Crypto
        </Button>
      </View>
      {props.collection.prices.map((price, i) => {
        return <Surface style={stylesTwo.surface} key={i}>
          <Card.Title titleNumberOfLines={3} title={'$' + numberWithCommas(Number(price.price).toFixed(2))+ "\n" + price.currency}  left={(props) => <SvgUri uri={price.logo_url} height="40" width="40" />} right={(props) => <IconButton {...props} icon="trash-can-outline" onPress={() => deleteItem(price.currency)} />} />
          <Button onPress={() => showDialog(price.currency)}>Details</Button>
          </Surface>
        })}
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <LinearGradient
              colors={['#09FF00', '#A5acaf', ]}
              style={styles.background}
              start={{ x: 0, y: 0}}
              end={{ x: 1, y: 1 }}
              >
              <Dialog.ScrollArea style={stylesThree.container}>
                <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
                <Title>{modalInformation[0].name} - {modalInformation[0].currency}</Title>
                  <DataTable>
                    <DataTable.Header>
                      <DataTable.Title>STATS</DataTable.Title>
                      <DataTable.Title>Today</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                      <DataTable.Cell>Rank</DataTable.Cell>
                      <DataTable.Cell>{modalInformation[0].rank}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell>Price</DataTable.Cell>
                      <DataTable.Cell>{numberWithCommas(Number(modalInformation[0].price).toFixed(2))}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell>30 Day High</DataTable.Cell>
                      <DataTable.Cell>{numberWithCommas(Number(modalInformation[0].high).toFixed(2))}</DataTable.Cell>
                    </DataTable.Row>


                    <DataTable.Row>
                      <DataTable.Cell>Market Cap</DataTable.Cell>
                      <DataTable.Cell>{numberWithCommas(Number(modalInformation[0].market_cap).toFixed(0))}</DataTable.Cell>
                    </DataTable.Row>


                    <DataTable.Row>
                      <DataTable.Cell>Circulating Supply</DataTable.Cell>
                       <DataTable.Cell>{numberWithCommas(Number(modalInformation[0].circulating_supply).toFixed(0))}</DataTable.Cell>
                    </DataTable.Row>


                  </DataTable>
                  <Dialog.Actions>
                    <Button onPress={hideDialog}>Done</Button>
                  </Dialog.Actions>
                </ScrollView>
              </Dialog.ScrollArea>
              </LinearGradient>
            </Dialog>
          </Portal>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
    </LinearGradient>
  );
}

const stylesTwo = StyleSheet.create({
  surface: {
    padding: 8,
    margin: 8,
    height: 110,
    width: 280,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
});

const mapStateToProps = state => {
  return {
    collection: state.collection
  }
}

const mapDispatchToProps = {
  loadPrices,
  setTicker,
  updateTicker
}

const stylesThree = StyleSheet.create({
  container: {
    borderColor: '#09FF00',
    borderWidth: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);