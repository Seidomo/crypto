import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadPrices, updateTicker, setTicker } from '../../store/collection.reducer.js';
import { PromiseProvider } from 'mongoose';
import { Avatar, Card, Title, Paragraph, IconButton, Surface, Divider, Button, Searchbar, Dialog, Portal, DataTable } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Dashboard(props) {

  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
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
      console.log('FUNCTION')
      if (value === null) {
        console.log('STORE');
        storeData(['BTC', 'ETH']);
        props.setTicker(['BTC', 'ETH'])
      } else {
        console.log('TICKER');
        console.log(JSON.parse(value));
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
    props.loadPrices();
  }, [props.collection.currency]);

  const handleSubmit = () => {
    console.log(addCurrency);
    storeData([...props.collection.currency, addCurrency]);
    props.updateTicker(addCurrency);
  }


  return (
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
        <Button mode="contained" onPress={() => handleSubmit}>
          Add Crypto
        </Button>
      </View>
      {props.collection.prices.map((price, i) => {
        return <Surface style={stylesTwo.surface} key={i}>
          <Card.Title title={price.currency} subtitle={price.price} left={(props) => <Avatar.Icon {...props} icon="sword-cross" />} right={(props) => <IconButton {...props} icon="trash-can-outline" onPress={() => { }} />} />
          <Button onPress={showDialog}>${price.currency} Details</Button>
          <Portal>
            {console.log(price.currency)}
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.ScrollArea style={stylesThree.container}>
                <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
                <Title>{price.name} - ${price.currency}</Title>
                  <DataTable>
                    <DataTable.Header>
                      <DataTable.Title>STATS</DataTable.Title>
                      <DataTable.Title>Today</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                      <DataTable.Cell>Market Cap</DataTable.Cell>
                      <DataTable.Cell>{price.rank}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell>Price</DataTable.Cell>
                      <DataTable.Cell>{price.price}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell>Volume</DataTable.Cell>
                       <DataTable.Cell>{price.circulating_supply}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell>Day High</DataTable.Cell>
                      <DataTable.Cell>{price.high}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell>Day Low</DataTable.Cell>
                      <DataTable.Cell>{price.price}</DataTable.Cell>
                    </DataTable.Row>
                  </DataTable>
                  <Dialog.Actions>
                    <Button onPress={hideDialog}>Done</Button>
                  </Dialog.Actions>
                </ScrollView>
              </Dialog.ScrollArea>
            </Dialog>
          </Portal>
        </Surface>
      })}
      <StatusBar style="auto" />
    </View>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
