import React from 'react'
import { View, Text, StatusBar, ScrollView } from 'react-native'

const Detail = ({ route }) => {
	const { deskripsi } = route.params

	return (
		<React.Fragment>
			<StatusBar backgroundColor='white' barStyle='dark-content' animated />
			<ScrollView contentContainerStyle={{ padding: 16 }}>
				<View style={{ backgroundColor: 'white', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 8 }}>
					<Text style={{ fontSize: 14, lineHeight: 24 }}>{deskripsi}</Text>
				</View>
			</ScrollView>
		</React.Fragment>
	)
}

export default Detail
