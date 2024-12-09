import React from 'react';
import GoogleButton from 'react-google-button';
import { signIn } from 'next-auth/react';
import { Button } from '@mui/material'; // якщо ви використовуєте Material-UI

const StyledGoogleButton = () => {
    return (
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
                marginRight: '5px',

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
            <GoogleButton onClick={() => signIn('google')} style={{ width: '100%', height: '100%' }} />
        </Button>
    );
};

export default StyledGoogleButton;
