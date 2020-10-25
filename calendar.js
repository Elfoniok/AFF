import React from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';

const DATA = [
	{
		key: "1",
		day: "THU",
		dayNo: "1"
	},
	{
		key: "2",
		day: "FRI",
		dayNo: "2",
	},
	{
		key: "3",
		day: "SAT",
		dayNo: "3",
	},
	{
		key: "4",
		day: "SUN",
		dayNo: "4",
	},
	{
		key: "5",
		day: "Mon",
		dayNo: "5"
	}
]

export class Calendar extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state = {selected: (new Map(): Map<string, boolean>)};
		this._onPressItem = this._onPressItem.bind(this)
	}

	_onPressItem(key)
	{
		
		this.setState(//(state) =>
		{
			// copy the map rather than modifying state.
			//console.log('dupa')
			//const selected = new Map(this.state.selected);
			//selected.set(key, !selected.get(key)); // toggle
			//return {selected};
			//state.selected[key] = true;
		});
	}

	render()
	{
		return(
			<View style={styles.container}>
				<FlatList
					data={DATA}
					renderItem={({ item }) => (
						<CalendarItem dayNo={item.dayNo} day={item.day}
						onPressItem={this._onPressItem}
						selected={!!this.state.selected.get(item.key)}
						itemKey={item.key}
						/>
					)}
					horizontal={true}
					//Key extractor check for item.key or fallback to index
					//keyExtractor={(item, index) => { item.key.toString()}}
				/>
			</View>
		);
	}
}

class CalendarItem extends React.Component
{
	_onPress = () =>
	{
		this.props.onPressItem(this.props.itemKey);
	};

	render()
	{
		console.log(this.props.selected);
		return(
		<TouchableOpacity style={this.props.selected ? styles.sel_item : styles.item }
			onPress={this._onPress} {...this.props}>
				<Text>{this.props.day}</Text>
				<Text>{this.props.dayNo}</Text>
		</TouchableOpacity>);
	}
}

const styles = StyleSheet.create(
{
	container:
	{
		height: 50,
		backgroundColor: 'red'
	},
	sel_item:
	{
		backgroundColor: 'white',
		width: 44,
		height: 44,
		borderRadius: 44/2
	},
	item:
	{
		backgroundColor: 'red'
	}
});
