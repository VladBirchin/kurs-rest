import React from 'react';
import { AppBar, Button, Container, Toolbar, Typography, Avatar, useTheme } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import GoogleIcon from '@mui/icons-material/Google';

// Змінна для збереження пошти користувача
let userEmail: string | null = null;

interface HeaderProps {
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
    const { data: session } = useSession();
    const theme = useTheme();



    if (session?.user?.email) {
        userEmail = session.user.email;
    }

    // Для перевірки можна вивести email у консоль
    console.log('User email:', userEmail);

    return (
        <AppBar
            position="static"
            sx={(theme) => ({
                backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#FAEBE3',
                boxShadow: 'none',
            })}
        >
            <Toolbar
                sx={(theme) => ({
                    boxShadow: 'none',
                    marginTop: '40px',
                    backgroundColor: theme.palette.mode === 'dark' ? '#222' : '#FDF8F5',
                    display: 'flex',
                    justifyContent: 'space-between',
                    '@media (max-width: 1500px)': {
                        padding: '5px 3px',
                    },
                })}
            >
                <Container
                    sx={{
                        display: 'flex',
                        padding: 0,
                        alignItems: 'center',
                    }}
                >
                    <Image src="/img/logo.png" alt="logo" width={26} height={23} />
                    <Typography
                        variant="h6"
                        sx={(theme) => ({
                            color: theme.palette.mode === 'dark' ? '#fff' : '#181818',
                            fontFamily: 'Satoshi, sans-serif',
                            fontSize: '16px',
                            fontWeight: 700,
                            lineHeight: '21.6px',
                            letterSpacing: '0.2637px',
                            textAlign: 'left',
                            textUnderlinePosition: 'from-font',
                            textDecorationSkipInk: 'none',
                            marginLeft: '8px',
                        })}
                    >
                        GREATESTDAY
                    </Typography>
                </Container>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {session ? (
                        <>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar
                                    src={session.user?.image || ''}
                                    sx={{
                                        width: 32,
                                        height: 32,
                                        marginRight: 2,
                                    }}
                                />
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: 700,
                                        color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
                                    }}
                                >
                                    {session.user?.name}
                                </Typography>
                            </div>
                            <Button
                                sx={(theme) => ({
                                    backgroundColor: theme.palette.mode === 'dark' ? '#555' : '#FAEBE3',
                                    color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
                                    width: '130px',
                                    height: '45px',
                                    borderRadius: '4px',
                                    fontFamily: 'Satoshi, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    lineHeight: '18.9px',
                                    letterSpacing: '0.2308px',
                                    textTransform: 'none',
                                    marginRight: '5px',
                                })}
                                onClick={() => signOut()}
                            >
                                Sign out
                            </Button>
                        </>
                    ) : (
                        <Button
                            onClick={() => signIn('google')}
                            sx={{
                                backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
                                color: theme.palette.mode === 'dark' ? '#000' : '#fff',
                                width: '130px',
                                height: '45px',
                                borderRadius: '4px',
                                fontFamily: 'Satoshi, sans-serif',
                                fontSize: '14px',
                                fontWeight: 700,
                                lineHeight: '18.9px',
                                letterSpacing: '0.2308px',
                                textAlign: 'left',
                                textTransform: 'none',
                                marginLeft: 2,
                            }}
                        >
                            <GoogleIcon sx={{ fontSize: '20px', marginRight: '10px' }} />
                            Sign in
                        </Button>
                    )}
                    <Button
                        onClick={toggleTheme} // Перемикання теми
                        sx={{
                            backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
                            color: theme.palette.mode === 'dark' ? '#000' : '#fff',
                            width: '130px',
                            height: '45px',
                            borderRadius: '4px',
                            fontFamily: 'Satoshi, sans-serif',
                            fontSize: '14px',
                            fontWeight: 700,
                            lineHeight: '18.9px',
                            letterSpacing: '0.2308px',
                            textAlign: 'left',
                            textTransform: 'none',
                            marginLeft: 2,
                        }}
                    >
                        Toggle Theme
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

export { userEmail }; 
