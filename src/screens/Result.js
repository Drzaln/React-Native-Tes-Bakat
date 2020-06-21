import React, { useContext, useRef, useEffect } from 'react'
import { View, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { NavigationContext } from '@react-navigation/native'
import LottieView from 'lottie-react-native'

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
				data={list.sort((a, b) => b.point - a.point)}
				renderItem={({ item, index }) => <RenderItem index={index} item={item} />}
			/>
		</React.Fragment>
	)
}

export default Result

const RenderItem = ({ index, item }) => {
	const navigation = useContext(NavigationContext)
	let content

	if (index === 0) {
		content = (
			<TouchableOpacity
				onPress={() => navigation.navigate('Detail', { deskripsi: item.deskripsi, judul: item.name })}
				style={{
					padding: 16,
					backgroundColor: 'white',
					borderRadius: 8,
					marginVertical: 8,
					alignItems: 'center'
				}}>
				<LottieView
					autoPlay
					autoSize
					source={require('../assets/animations/cup-winner.json')}
					hardwareAccelerationAndroid={true}
				/>
				<Text style={{ lineHeight: 24 }}>Hasil tes tertinggimu adalah</Text>
				<Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
				<Text style={{ lineHeight: 24 }}>{item.point} poin</Text>
				<View style={{ height: 16 }} />
				<Text style={{ fontSize: 12, color: 'dodgerblue' }}>Tap Untuk Detail</Text>
			</TouchableOpacity>
		)
	} else {
		content = (
			<TouchableOpacity
				key={index}
				onPress={() => navigation.navigate('Detail', { deskripsi: item.deskripsi, judul: item.name })}
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

	return content
}
