import React, { createContext, useEffect } from 'react';
import { theme } from '../Utils/themes';

const getMode = JSON.parse(localStorage.getItem('theme')) || 'dark';
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	const [mode, setMode] = React.useState(getMode);
	const [open, setOpen] = React.useState(true);

	const handleMode = () => {
		setMode(mode === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		localStorage.setItem('theme', JSON.stringify(mode));
	}, [mode]);
	const handleMenu = () => {
		setOpen(!open);
	};

	const newTheme = theme[mode];

	const value = { mode, newTheme, handleMode, open, handleMenu };
	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContextProvider };
