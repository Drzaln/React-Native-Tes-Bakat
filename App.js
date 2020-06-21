import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { enableScreens } from 'react-native-screens'
import Home from './src/screens/Home'
import Tes from './src/screens/Tes'
import codePush from 'react-native-code-push'
import Result from './src/screens/Result'
import Detail from './src/screens/Detail'
import { color } from 'react-native-reanimated'

enableScreens()

const Stack = createStackNavigator()

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen
					name='Home'
					component={Home}
					options={{
						headerTitleAlign: 'center',
						headerTintColor: 'darkslategrey'
					}}
				/>
				<Stack.Screen
					name='Tes Bakat'
					component={Tes}
					options={{ headerTitleAlign: 'center', headerTintColor: 'darkslategrey' }}
				/>
				<Stack.Screen
					name='Hasil Tes'
					component={Result}
					options={{ headerTitleAlign: 'center', headerTintColor: 'darkslategrey' }}
				/>
				<Stack.Screen
					name='Detail'
					component={Detail}
					options={({ route }) => ({
						headerTitleAlign: 'center',
						headerTintColor: 'darkslategrey',
						title: route.params.judul
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

App = codePush()(App)

export default App
