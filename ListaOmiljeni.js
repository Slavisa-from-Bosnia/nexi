import { AppRegistry, TextInput, Text, View } from 'react-native';
import React, { Component } from 'react';
import { Header, Icon, List, ListItem, ListView } from 'react-native-elements';



const list = [
						{
							name: 'Amy Farha',
							subtitle: 'Vice President'
						},
						{
							name: 'Chris Jackson',
							avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
							subtitle: 'Vice Chairman'
						}
						
				];
				
	export default class ListaOmiljeni extends Component {
		
			render () {
				
			  return (
				<List containerStyle={{marginBottom: 20}}>
				  {
					list.map((l, i) => (
					  <ListItem
						roundAvatar
						avatar={{uri:l.avatar_url}}
						key={i}
						title={l.name}
					  />
					))
				  }
				</List>
				)
			}
	}