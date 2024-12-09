import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSession } from 'next-auth/react';

interface FavoriteButtonProps {
    serviceId: number;
    title: string;
    description: string;
    image: string;
    price: number;
    categories: string[];
    country: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
                                                           serviceId,
                                                           title,
                                                           description,
                                                           image,
                                                           price,
                                                           categories,
                                                           country,
                                                       }) => {
    const { data: session } = useSession(); // Отримуємо сесію
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        if (!session) return;
        axios.get('/api/favorites').then((response) => {
            const favorites = response.data;
            setIsFavorited(favorites.some((item: { id: number }) => item.id === serviceId));
        });
    }, [serviceId, session]);

    const handleClick = () => {
        if (!session) {
            alert('Please log in to manage favorites!');
            return;
        }

        const userEmail = session.user?.email; // Отримуємо email з сесії

        if (!userEmail) {
            alert('User email is not available!');
            return;
        }

        const favoriteData = {
            id: serviceId,
            title,
            description,
            image,
            price,
            categories,
            country,
            userEmail, // Додаємо email користувача
        };

        if (isFavorited) {
            axios
                .delete(`/api/favorites`, { params: { id: serviceId } })
                .then(() => setIsFavorited(false))
                .catch((err) => console.error('Error removing favorite:', err));
        } else {
            axios
                .post('/api/favorites', favoriteData)
                .then(() => setIsFavorited(true))
                .catch((err) => console.error('Error adding favorite:', err));
        }
    };

    return (
        <Box
            component="div"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isFavorited ? 'red' : 'black',
                color: 'white',
                borderRadius: '8px',
                marginLeft: '120px',
                marginTop: '12px',
                width: '91px',
                position: 'absolute',
                padding: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
            }}
            onClick={(e) => {
                e.preventDefault();
                handleClick();
            }}
        >
            {isFavorited ? (
                <FavoriteIcon sx={{ marginRight: '8px' }} />
            ) : (
                <FavoriteBorderIcon sx={{ marginRight: '8px' }} />
            )}
            <Typography
                variant="body1"
                sx={{
                    fontWeight: '700',
                    fontSize: '10px',
                    whiteSpace: 'nowrap',
                }}
            >
                {isFavorited ? 'Remove' : 'Add'}
            </Typography>
        </Box>
    );
};

export default FavoriteButton;
