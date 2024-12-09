import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, createTheme, Button } from '@mui/material';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from '../store/servicesSlice';

import Header from '../components/Header';
import MainContent from '../components/MainContent';
import "../styles/globals.css";
import Favorites from "@/pages/Favorites";

export const store = configureStore({
    reducer: {
        services: servicesReducer,
    },
});

const HomePage: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: darkMode ? '#FFFFFF' : '#000000',
            },
            background: {
                default: darkMode ? '#333' : '#FAEBE3',
                paper: darkMode ? '#333333' : '#FFFFFF',
            },
            text: {
                primary: darkMode ? '#FFFFFF' : '#000000',
            }
        },
    });

    const toggleTheme = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    const openLink = () => {
        window.open('http://localhost:3001/', '_blank');
    };

    return (
        <SessionProvider>
            <Provider store={store}>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className="App">
                        <Header toggleTheme={toggleTheme} />
                        <MainContent />
                        <Favorites />
                        <div style={{ padding: '20px', textAlign: 'center' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={openLink}
                            >
                                Go to menu
                            </Button>
                        </div>
                    </div>
                </ThemeProvider>
            </Provider>
        </SessionProvider>
    );
};

export default HomePage;
