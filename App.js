import { AppRegistry, TextInput, Text, View } from 'react-native';
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { Header, Icon, List, ListItem } from 'react-native-elements';
import {StackNavigator } from 'react-navigation';
import PocetniEkran from './PocetniEkran.js';
import Ekran2 from './Ekran2';

export default class App extends Component {
	render () {
		const SimpleApp = StackNavigator({
			Home: { screen: PocetniEkran },
			Profile: { screen: Ekran2 }},
	
		);
	return (
		<View style = {{ flex:1 }} >
			<SimpleApp/>
		</View> 
		);
	}
}



