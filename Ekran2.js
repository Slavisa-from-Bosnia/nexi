import { AppRegistry, TextInput, Text, View } from 'react-native';
import React, { Component } from 'react';
import { Header, Icon, List, ListItem, SearchBar } from 'react-native-elements';
import {StackNavigator } from 'react-navigation';
import ListaOmiljeni from './ListaOmiljeni.js';
import ListaIstorija from './ListaIstorija.js';

export default class Ekran2 extends Component {
	
	static navigationOptions = {
    title: '', 
	header: null
	};
	
	
	render () {
		
		
		
	return (
		
		<View style={{
				flex: 1,
				}}  >
			<View style = {{ flex: 1.1 }}>
				<Header
					backgroundColor='#506d58'
					leftComponent={{ icon: 'long-arrow-left', type: 'font-awesome' , color: '#fff' }}
					centerComponent={{ text: 'IZABERITE POLAZNU LOKACIJU' , style: { color: '#fff' } }} 
					rightComponent={{ icon: 'home', color: '#fff' }}
				/>
			</View>
			<View style={{
				flex: 8.9 }} >
				
					<SearchBar
						autoFocus = 'true'
						round
						//onChangeText={someMethod}
						placeholder='Unesite lokaciju polaska ...' 
						/>
				
				<Text style = {{ fontSize: 18, fontWeight: 'bold' }} >
				Omiljene lokacije
				</Text>
				<ListaOmiljeni/>
				<Text style = {{ fontSize: 18, fontWeight: 'bold' }} >
				Istorija
				</Text>
				<ListaIstorija/>				
			
			</View>

		</View>
				
		);

	}
}
