import React, { useState, useContext, useMemo } from 'react'
import { View, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import { Question } from '../questions/Question'
import { QuestionController, QuestionContext } from '../contexts/QuestionContext'
import { NavigationContext } from '@react-navigation/native'

const Tes = () => {
	return (
		<QuestionController>
			<React.Fragment>
				<StatusBar backgroundColor='white' barStyle='dark-content' animated />
				<FlatList
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
					style={{ flex: 1 }}
					contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
					data={Question}
					renderItem={({ item }) => <RenderItem item={item} />}
					ListFooterComponent={() => <Button />}
				/>
			</React.Fragment>
		</QuestionController>
	)
}

export default Tes

const Button = () => {
	const { _navigate } = useContext(QuestionContext)
	return (
		<TouchableOpacity
			onPress={() => _navigate()}
			style={{
				backgroundColor: 'orangered',
				padding: 12,
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: 4,
				marginTop: 28,
				marginBottom: 24
			}}>
			<Text style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>Submit Jawaban</Text>
		</TouchableOpacity>
	)
}

const RenderItem = ({ item }) => {
	return (
		<View key={item.id} style={{ marginVertical: 8, padding: 16, borderRadius: 8, backgroundColor: 'white' }}>
			<View style={{ flexDirection: 'row' }}>
				<View style={{ flex: 1, marginRight: 4 }}>
					<Text style={{ lineHeight: 20 }}>{`${item.id}. `}</Text>
				</View>
				<View style={{ flex: 15 }}>
					<Text style={{ lineHeight: 20 }}>{`${item.question}`}</Text>
				</View>
			</View>
			<View style={{ height: 16 }} />
			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
				<RadioItem radioCount={5} questionId={item.id} />
			</View>
		</View>
	)
}

const RadioItem = ({ radioCount = 3, questionId }) => {
	const [ selected, setSelected ] = useState(undefined)
	const { _handleAnswer } = useContext(QuestionContext)

	const onPress = (questionPoint, questionId) => {
		setSelected(questionPoint)
		_handleAnswer(questionPoint, questionId)
	}

	const radioItem = []
	for (let index = 1; index <= radioCount; index++) {
		radioItem.push(
			<View key={index} style={{ alignItems: 'center' }}>
				<TouchableOpacity
					onPress={() => onPress(index, questionId)}
					style={{
						width: 40,
						height: 40,
						borderColor: selected === index ? 'darkturquoise' : 'grey',
						borderWidth: 1,
						borderRadius: 100,
						alignItems: 'center',
						justifyContent: 'center'
					}}>
					<View
						style={{
							width: 30,
							height: 30,
							borderRadius: 100,
							backgroundColor: selected === index ? 'darkturquoise' : 'white'
						}}
					/>
				</TouchableOpacity>
				<View style={{ height: 8 }} />
				<Text>{`${index}`}</Text>
			</View>
		)
	}
	return useMemo(() => <React.Fragment>{radioItem}</React.Fragment>, [ _handleAnswer ])
}
