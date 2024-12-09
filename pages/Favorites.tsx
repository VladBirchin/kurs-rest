import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Grid } from '@mui/material';
import { useSession } from 'next-auth/react';
import ServiceCard from '../components/ServiceCard'; // Імпортуємо компонент картки

interface FavoriteItem {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    categories: string[];
    country: string;
}

const FavoritesPage: React.FC = () => {
    const { data: session } = useSession();
    const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

    useEffect(() => {
        if (session?.user) {
            axios
                .get('/api/favorites')
                .then((response) => setFavorites(response.data))
                .catch((error) => console.error('Error fetching favorites:', error));
        }
    }, [session]);

    return (
        <Container>
            <Typography variant="h4" sx={{ marginTop: '20px', marginBottom: '20px' }}>
                Your Favorites
            </Typography>
            {favorites.length === 0 ? (
                <Typography>No favorites found.</Typography>
            ) : (
                <Grid container spacing={2}>
                    {favorites.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <ServiceCard
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                price={item.price}
                                categories={item.categories}
                                country={item.country}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default FavoritesPage;
