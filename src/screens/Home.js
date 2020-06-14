import React, { useContext, useMemo } from 'react'
import { Text, StatusBar, ScrollView, View, TextInput, TouchableOpacity } from 'react-native'
import { NavigationContext } from '@react-navigation/native'
import { HomeController, HomeContext } from '../contexts/HomeContext'

const Home = () => {
	return (
		<HomeController>
			<React.Fragment>
				<StatusBar backgroundColor='white' barStyle='dark-content' animated />
				<ScrollView
					showsVerticalScrollIndicator={false}
					keyboardShouldPersistTaps='handled'
					contentContainerStyle={{
						flex: 1,
						padding: 16
					}}>
					<View style={{ padding: 16, backgroundColor: '#e0fcff', borderRadius: 8 }}>
						<Text style={{ textAlign: 'left', lineHeight: 20, fontWeight: '700', fontSize: 16 }}>
							Tes Bakat ini didapatkan dari kajian dr. Aisyah Dahlan.
						</Text>
						<Text style={{ marginTop: 16, lineHeight: 20 }}>
							Berikan skor pada setiap pernyataan antara 0-5. Berikan skor 5 untuk pernyataan yang sangat
							mengambarkan diri kalian, dan skor 0 untuk yang tidak tepat.
						</Text>
					</View>
					<View style={{ marginTop: 28 }}>
						<Text>Silahkan isi data dirimu</Text>
						<View style={{ backgroundColor: 'white', padding: 16, borderRadius: 8, marginTop: 8 }}>
							<NamaField />
							<View style={{ height: 16 }} />
							<AsalField />
						</View>
					</View>
					<View style={{ marginTop: 28 }}>
						<ButtonStart />
					</View>
				</ScrollView>
			</React.Fragment>
		</HomeController>
	)
}

export default Home

const NamaField = () => {
	const { name, setName } = useContext(HomeContext)
	return useMemo(
		() => (
			<TextInput
				style={{
					height: 40,
					borderColor: 'lightgray',
					borderWidth: 1,
					borderRadius: 4,
					paddingHorizontal: 8
				}}
				placeholder='Nama'
				onChangeText={(text) => setName(text)}
				value={name}
			/>
		),
		[ name ]
	)
}

const AsalField = () => {
	const { asal, setAsal } = useContext(HomeContext)
	return useMemo(
		() => (
			<TextInput
				style={{
					height: 40,
					borderColor: 'lightgray',
					borderWidth: 1,
					borderRadius: 4,
					paddingHorizontal: 8
				}}
				placeholder='Asal'
				onChangeText={(text) => setAsal(text)}
				value={asal}
			/>
		),
		[ asal ]
	)
}

const ButtonStart = () => {
	const { buttonDisabled } = useContext(HomeContext)
	const navigation = useContext(NavigationContext)
	return useMemo(
		() => (
			<TouchableOpacity
				onPress={() => navigation.navigate('Tes Bakat')}
				disabled={buttonDisabled}
				style={{
					backgroundColor: buttonDisabled ? 'palevioletred' : 'orangered',
					padding: 12,
					justifyContent: 'center',
					alignItems: 'center',
					borderRadius: 4
				}}>
				<Text style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>Mulai Tes</Text>
			</TouchableOpacity>
		),
		[ buttonDisabled ]
	)
}
