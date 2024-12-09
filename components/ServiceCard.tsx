import React from 'react';
import { Card, CardContent, Typography, CardMedia, Container ,useTheme} from '@mui/material';
import Image from 'next/image';
import FavoriteButton from './FavoriteButton';
import Link from 'next/link';

interface ServiceCardProps {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    categories: string[];
    country: string;
}



const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, image, price, categories, country }) => {
    const theme = useTheme();
    return (
        <Link href={`/service/${id}`} passHref>
            <Card sx={{ width: '250px', height: '296px',  backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#FDF8F5', cursor: 'pointer' }}>
                <FavoriteButton serviceId={id}
                                title={title}
                                description={description}
                                image={image}
                                price={price}
                                categories={categories}
                                country={country}/>
                <CardMedia>
                    <Image
                        src={image}
                        alt={title}
                        width={250}
                        height={140}
                        objectFit="cover"
                    />
                </CardMedia>

                <CardContent>
                    <Container sx={{ display: 'flex', flexWrap: 'wrap', gap: '36px' }}>
                        {Array.isArray(categories) && categories.length > 0 ? (
                            categories.map((category, index) => (
                                <Typography
                                    key={index}
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{

                                        border: theme.palette.mode === 'dark' ? '1px solid #FFF' : '1px solid #000000',

                                        padding: '3px 10px',
                                        borderRadius: '18px',
                                        fontFamily: 'Satoshi',
                                        fontSize: '12px',
                                        fontWeight: 500,
                                        lineHeight: '16.2px',
                                        letterSpacing: '0.1319px',

                                        color: theme.palette.mode === 'dark' ? '#FFF' : '#000000',
                                        textDecoration: 'none', // Прибираємо підкреслення
                                        marginLeft: '-28px'
                                    }}
                                >
                                    {category}
                                </Typography>
                            ))
                        ) : (
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    border: '1px solid #000000',
                                    padding: '3px 10px',
                                    borderRadius: '18px',
                                    fontFamily: 'Satoshi',
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    lineHeight: '16.2px',
                                    letterSpacing: '0.1319px',
                                    textAlign: 'left',
                                    textDecoration: 'none', // Прибираємо підкреслення
                                }}
                            >
                                Категорії не вказано
                            </Typography>
                        )}
                    </Container>

                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: 'Satoshi',
                            fontSize: '14px',
                            fontWeight: 700,
                            lineHeight: '18.9px',
                            letterSpacing: '0.2308px',
                            textAlign: 'left',
                            marginTop: '8px',
                            maxHeight: '35px',
                            overflow: 'hidden',
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: 'Satoshi',
                            fontSize: '12px',
                            fontWeight: 500,
                            lineHeight: '16px',
                            letterSpacing: '0.1813px',
                            textAlign: 'left',
                            marginTop: '8px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxHeight: '18px',
                        }}
                    >
                        {description}
                    </Typography>

                    <Container sx={{ display: 'flex', justifyContent: 'space-between', width: '250px', marginLeft: '-25px' }}>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                fontFamily: 'Satoshi',
                                fontSize: '12px',
                                fontWeight: 400,
                                lineHeight: '16.2px',
                                letterSpacing: '0.1648px',
                                textAlign: 'left',
                                marginTop: '12px',
                            }}
                        >
                            {country}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                width: '64px',
                                height: '23px',
                                padding: '3px 6px',

                                borderRadius: '4px',

                                backgroundColor: theme.palette.mode === 'dark' ? '#222' : '#FAEBE3',
                                fontFamily: 'Satoshi',
                                fontSize: '12px',
                                fontWeight: 500,
                                lineHeight: '16.2px',
                                marginTop: '8px',

                                color: theme.palette.mode === 'dark' ? '#fff' : '#000000',
                            }}
                        >
                            {price}
                        </Typography>
                    </Container>
                </CardContent>
            </Card>
        </Link>
    );
};

export default ServiceCard;
