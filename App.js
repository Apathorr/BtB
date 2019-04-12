import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, FlatList, Button, ScrollView, StyleSheet, Image, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  _onPressButton(){
    Alert.alert ('Ya did the thing!')
  }
  _onLongPressButton(){
    Alert.alert('doin all the things? nice')
  }
  _jeremey(){
    Alert.alert('stop touching my phone Jeremy >:(', 'but like really tho', 
    [
      {text : 'meh', onPress: () => console.log('meh')},
    {
      text: 'No',
      onPress: () => console.log('No'),
      style: 'cancel'
    },
    {text: 'fine', onPress: () => console.log('OK')}
    ])
  }
  render() {
      return (
        <View style={{flex: 1}}>
           <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="red">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Deal of the Day</Text>
          </View>
        </TouchableHighlight>        
        <ScrollView>
         <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>we can edit all of this fairly easy</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Use input text saved on our side?</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>click me</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>hold me</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._jeremey} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Jear Bear</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>These ones move! 6</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>These ones move! 6</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._biscuits} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>biscuits</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._biscuits} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>biscuits</Text>
          </View>
        </TouchableHighlight>
        </ScrollView>       
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingBottom: 200,
    alignItems: 'center'
  },
  button: {
    marginBottom: 5,
    height: 200,
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  buttonText: {
    fontSize: 20,
    padding: 80,
    color: 'white'
  }
  
});

/* import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}


 import React, { Component } from 'react'
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#000000" />
        <ActivityIndicator size="small" color="#00ff00" />
        <ActivityIndicator size="large" color="#0000ff" />
        <ActivityIndicator size="small" color="#00ff00" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

AppRegistry.registerComponent('App', () => App)

 var tCtx = document.getElementById('textCanvas').getContext('2d'),
    imageElem = document.getElementById('image');

document.getElementById('text').addEventListener('keyup', function (){
    tCtx.canvas.width = tCtx.measureText(this.value).width;
    tCtx.fillText(this.value, 0, 10);
    imageElem.src = tCtx.canvas.toDataURL();
    console.log(imageElem.src);
}, false);


 var cardData =

  {
    company: "Acme, inc.",
    contactInfo: {
      name: "My Name",
      phone: "555-123-4567",
      address: {
        street: "123 Street Rd.",
        city: "San Diego",
        state: "CA",
        zip: "92101"
      }
    }
  }

document.body.appendChild(GenerateBusinessCard(cardData));

function GenerateBusinessCard(cardData)  {
  var htmlCard = document.createElement("div");
  htmlCard.className = "bcard";

  var company = document.createElement("div");
  company.className = "company";
  company.innerHTML = cardData.company;

  var contact = info = document.createElement("div");
  tlSuit.className = "contactInfo";
  tlSuit.innerHTML = cardData.contactInfo;

  var phone = document.createElement("div");
  brRank.className = "phone";
  brRank.innerHTML = cardData.phone;

  var address = document.createElement("div");
  brSuit.className = "address";
  brSuit.innerHTML = cardData.address;

  var street = document.createElement("div");
  mSuit.className = "street";
  mSuit.innerHTML = cardData.street;

  var street = document.createElement("div");
  mSuit.className = "street";
  mSuit.innerHTML = cardData.street;

  var street = document.createElement("div");
  mSuit.className = "city";
  mSuit.innerHTML = cardData.city;

  var street = document.createElement("div");
  mSuit.className = "state";
  mSuit.innerHTML = cardData.state;

  var street = document.createElement("div");
  mSuit.className = "zip";
  mSuit.innerHTML = cardData.zip;

  htmlCard.appendChild(company);
  htmlCard.appendChild(contactInfo);
  htmlCard.appendChild(phone);
  htmlCard.appendChild(address);
  htmlCard.appendChild(street);
  htmlCard.appendChild(city);
  htmlCard.appendChild(state)
  ;
  htmlCard.appendChild(zip);

    console.log(htmlCard);

    return htmlCard;
  }
*/