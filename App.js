import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { enableScreens } from 'react-native-screens'
import Home from './src/screens/Home'
import Tes from './src/screens/Tes'
import codePush from 'react-native-code-push'
import Result from './src/screens/Result'

enableScreens()

let codePushOptions = {
	checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
	installMode: codePush.InstallMode.ON_NEXT_RESUME
}
const Stack = createStackNavigator()

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen name='Home' component={Home} options={{ headerTitleAlign: 'center' }} />
				<Stack.Screen name='Tes Bakat' component={Tes} options={{ headerTitleAlign: 'center' }} />
				<Stack.Screen name='Hasil Tes' component={Result} options={{ headerTitleAlign: 'center' }} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

App = codePush(codePushOptions)(App)

export default App
