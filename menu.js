import React from 'react';
import { View, Image, StyleSheet } from 'react-native'

export class Menu extends React.Component
{
	render()
	{
		return(
			<View style={styles.container}>
				<Image 
					style={styles.icon}
					source={require('./resource/img/menu-cal.png')}
				/>
				<Image
					style={styles.icon}
					source={require('./resource/img/menu-star.png')}
				/>
				<Image
					style={styles.icon}
					source={require('./resource/img/menu-cart.png')}
				/>
			</View>);
	}
}

const styles = StyleSheet.create({
	container:
	{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		backgroundColor: 'brown'
	},

	icon:
	{
		height: 80,
		width: 90
	}
});
