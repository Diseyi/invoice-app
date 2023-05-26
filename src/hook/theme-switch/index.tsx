import React, { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkTheme from '../useDarkTheme';

const ThemeSwitch = () => {

    const [colorTheme, setTheme] = useDarkTheme() as [string, React.Dispatch<React.SetStateAction<string>>]
    const [isDarkMode, setDarkMode] = useState(colorTheme === 'light' ? true : false);

    const toggleDarkMode = (checked: boolean) => {

        setTheme(colorTheme)
        setDarkMode(checked)

    }
    return (
        <>
            <DarkModeSwitch
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={24}
                moonColor="#7E88C3"
                sunColor="#858BB2"
            />
        </>
    )
}

export default ThemeSwitch