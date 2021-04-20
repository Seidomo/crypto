import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadPrices, updateTicker, setTicker } from '../../store/collection.reducer.js';
import { PromiseProvider } from 'mongoose';
import { Avatar, Card, Title, Paragraph, IconButton, Surface, Divider, Button, Searchbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';




function Dashboard(props) {

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
      if(value === null) {
        console.log('STORE');
        storeData(['BTC', 'ETH']);
        props.setTicker(['BTC', 'ETH'])
      }else{
        console.log('TICKER');
        console.log(JSON.parse(value));
        props.setTicker(JSON.parse(value));
      }
    } catch(e) {
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
          onChangeText=onChangeText={text => setCurrency(text)} 
          name="ticker"
          type="text" 
          required
          theme={theme.colors.primary}
        />
        <Button mode="contained" onPress={() => console.log('Pressed')}>
        Add Crypto
        </Button>
      </View>
        {props.collection.prices.map((price, i) => {
          return <Surface style={stylesTwo.surface} key={i}>
            <Card.Title title={price.currency} subtitle={price.price} left={(props) => <Avatar.Icon {...props} icon="sword-cross" />} right={(props) => <IconButton {...props} icon="trash-can-outline" onPress={() => {}} />}/>
            </Surface>
        })}
      <StatusBar style="auto" />
    </View>
  );
}

const stylesTwo = StyleSheet.create({
  surface: {
    padding: 8,
    margin: 10,
    height: 80,
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
