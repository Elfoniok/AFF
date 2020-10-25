import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { WhiteText } from './whiteText.js'

export class MovieListItem extends React.Component
{
	render()
	{
		return (
		<View>
			<View style={styles.container}>
				<Image source={require('./resource/img/star_empty.png')} style={styles.favorite} />
				<Image source={require('./resource/img/thumbnail.jpg')} style={styles.thumbnail} />
				<View style={styles.description} >
					<WhiteText>Director</WhiteText>
					<WhiteText>Title</WhiteText>
					<WhiteText>Time</WhiteText>
					<WhiteText>Location</WhiteText>
				</View>
				<Image source={require('./resource/img/ticket.png')} style={styles.ticket} />
			</View>
			<View style={styles.separator}></View>
		</View>);
	}
}

const styles = StyleSheet.create(
	{
		container:
		{
			display: 'flex',
			flexDirection: 'row',
			margin:10,
			alignItems: 'center'
		},
		
		favorite:
		{
			backgroundColor: 'transparent',
			width: 30,
			height: 30,
			marginRight: 5
		},
		
		thumbnail:
		{
			height: 80,
			width: 70,
			marginRight: 5
		},
		
		description:
		{
			backgroundColor: 'transparent',
			height: 80,
			width: 160,
			color: 'white'
		},
		
		ticket:
		{
			backgroundColor: 'transparent',
			height:30,
			width: 40,
			marginLeft: 'auto'
		},
		separator:
		{
			height:5,
			borderBottomWidth: StyleSheet.hairlineWidth,
			borderBottomColor: 'white',
			marginLeft:10,
			marginRight:15
		},
		text:
		{
		}
	}
);
