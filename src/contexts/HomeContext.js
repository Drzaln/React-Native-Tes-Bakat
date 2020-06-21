import React, { useState, useMemo } from 'react'

const initialState = {
	name: '',
	asal: '',
	buttonDisabled: true,
	setName: () => {},
	setAsal: () => {}
}

export const HomeContext = React.createContext(initialState)

export const { Provider: HomeProvider, Consumer: HomeConsumer } = HomeContext

export const HomeController = ({ children }) => {
	const [ name, setName ] = useState('')
	const [ asal, setAsal ] = useState('')
	let buttonDisabled = true

	if (name && asal) {
		buttonDisabled = false
	}

	return useMemo(
		() => (
			<HomeProvider
				value={{
					name,
					asal,
					buttonDisabled,
					setName,
					setAsal
				}}>
				{children}
			</HomeProvider>
		),
		[ name, asal ]
	)
}
