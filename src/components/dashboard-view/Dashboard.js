import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
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
      if(value === null) {
        storeData(['BTC', 'ETH']);
        props.setTicker(['BTC', 'ETH'])
      }else{
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
            <Card.Title title={price.currency} subtitle={price.price} left={(props) => <Avatar.Image size={40} source={{uri: price.logo_url}} />} right={(props) => <IconButton onPress={() => deleteItem(price.currency)} {...props} icon="trash-can-outline" />}/>
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
