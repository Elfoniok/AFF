import React from 'react';
import { View, SectionList, StyleSheet, Text, ImageBackground } from 'react-native';
import { MovieListItem } from './listItem.js';
import { Menu } from './menu.js';
import { Calendar } from './calendar.js';
import Constants from 'expo-constants'

const DATA = [
	{
		title: 'Earlier Today',
		data: ['Movie1', 'Movie2', 'Movie3', 'Movie4'],
	},
	{
		title: 'What\'s on now',
		data: ['Movie5', 'Movie6', 'Movie7', 'Movie8']
	},
	{
		title: 'Comming up today',
		data: ['Movie9', 'Movie10', 'Movie11', 'Movie12', 'Movie13', 'Movie14']
	}
];

export class Schedule extends React.Component
{
	render()
	{
		return (
		<View style={styles.container}>
			<ImageBackground 
				source={require('./resource/img/background.jpg')}
				style={[styles.background]}
			/>
			<Calendar />
			<SectionList
				sections={DATA}
				renderItem={({item}) => <MovieListItem/>}
				renderSectionHeader=
				{
					({section: {title}}) => <Text style={styles.section}>{title}</Text>
				}
				keyExtractor={(item, index) => index.toString()}
			/>
			<Menu style={styles.menu} />
		</View>);
	}
}

const styles = StyleSheet.create(
{
	container:
	{
		marginTop: Constants.statusBarHeight,
		flexDirection: 'column',
		flexWrap: 'nowrap',
		justifyContent: 'flex-end'
	},

	menu:
	{
		width: '100%'
	},

	text:
	{
		fontSize: 42,
	},

	background:
	{
		width: '100%',
		height: '100%',
		zIndex: -1,
		position: "absolute"
	},

	section:
	{
		backgroundColor: 'pink',
		height: 40,
		padding: 10
	}
});

