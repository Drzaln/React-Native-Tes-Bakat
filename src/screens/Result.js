import React, { useContext } from 'react'
import { View, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { NavigationContext } from '@react-navigation/native'

const Result = ({ route }) => {
	const { list } = route.params
	return (
		<React.Fragment>
			<StatusBar backgroundColor='white' barStyle='dark-content' animated />
			<FlatList
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				style={{ flex: 1 }}
				contentContainerStyle={{ padding: 16 }}
				data={list}
				renderItem={({ item, index }) => <RenderItem index={index} item={item} />}
				ListHeaderComponent={() => (
					<View style={{ marginBottom: 8 }}>
						<Text>Berikut adalah hasil dari tes yang anda kerjakan</Text>
					</View>
				)}
			/>
		</React.Fragment>
	)
}

export default Result

const RenderItem = ({ index, item }) => {
	const navigation = useContext(NavigationContext)
	return (
		<TouchableOpacity
			key={index}
			onPress={() => alert('Masih dalam pengembangan')}
			style={{
				marginVertical: 8,
				padding: 16,
				borderRadius: 8,
				backgroundColor: 'white'
			}}>
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'space-between',
					flexDirection: 'row'
				}}>
				<Text>{item.name}</Text>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Text>{item.point}</Text>
					<Icon name='chevron-right' size={24} />
				</View>
			</View>
			<Text style={{ fontSize: 12, color: 'dodgerblue' }}>Tap Untuk Detail</Text>
		</TouchableOpacity>
	)
}
