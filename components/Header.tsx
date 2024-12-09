// components/Header.tsx
import React from 'react';
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import Image from 'next/image'; // Для оптимізації зображень у Next.js

const Header: React.FC = () => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: '#FAEBE3',
            }}
        >
            <Toolbar
                sx={{
                    marginTop: '40px',
                    backgroundColor: '#FDF8F5',
                    display: 'flex',
                    justifyContent: 'space-between',
                    '@media (max-width: 1500px)': {
                        padding: '5px 3px',
                    },
                }}
            >
                <Container
                    sx={{
                        display: 'flex',
                        padding: 0,
                        alignItems: 'center',
                    }}
                >
                    {/* Використовуємо Image компонент для оптимізації зображення */}
                    <Image src="/img/logo.png" alt="logo" width={100} height={50} />
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#181818',
                            fontFamily: 'Satoshi, sans-serif',
                            fontSize: '16px',
                            fontWeight: 700,
                            lineHeight: '21.6px',
                            letterSpacing: '0.2637px',
                            textAlign: 'left',
                            textUnderlinePosition: 'from-font',
                            textDecorationSkipInk: 'none',
                            marginLeft: '8px',
                        }}
                    >
                        GREATESTDAY
                    </Typography>
                </Container>
                <div>
                    <Button
                        sx={{
                            backgroundColor: '#000000',
                            color: '#FFFFFF',
                            width: '130px',
                            height: '45px',
                            borderRadius: '4px',
                            fontFamily: 'Satoshi, sans-serif',
                            fontSize: '14px',
                            fontWeight: 700,
                            lineHeight: '18.9px',
                            letterSpacing: '0.2308px',
                            textAlign: 'left',
                            textUnderlinePosition: 'from-font',
                            textDecorationSkipInk: 'none',
                            marginLeft: 2,
                            textTransform: 'none',

                            '@media (max-width: 600px)': {
                                width: '100px',
                                height: '35px',
                                fontSize: '12px',
                            },
                        }}
                    >
                        Our wedding
                    </Button>
                    <Button
                        sx={{
                            backgroundColor: '#FAEBE3',
                            color: '#000000',
                            width: '130px',
                            height: '45px',
                            borderRadius: '4px',
                            fontFamily: 'Satoshi, sans-serif',
                            fontSize: '14px',
                            fontWeight: 700,
                            lineHeight: '18.9px',
                            letterSpacing: '0.2308px',
                            textUnderlinePosition: 'from-font',
                            textDecorationSkipInk: 'none',
                            marginLeft: 2,
                            textTransform: 'none',

                            '@media (max-width: 600px)': {
                                width: '100px',
                                height: '35px',
                                fontSize: '12px',
                                marginTop: '5px',
                            },
                            '@media (max-width: 1500px)': {
                                marginTop: '5px',
                            },
                        }}
                    >
                        Sign out
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
