import React from 'react';
import { Text } from 'react-native';

export class WhiteText extends React.Component
{
	render()
	{
		return(
			<Text style={ {color:'white'} }>{this.props.children}</Text>
		);
	}
}
