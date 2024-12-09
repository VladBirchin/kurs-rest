import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Typography, Button, Box, useTheme } from '@mui/material';
import Filter from './Filter';
import ServiceCard from './ServiceCard';
import { setSelectedCategory, setVisibleIndexes, fetchServices } from '../store/servicesSlice';
import { RootState } from '../store/store';




const MainContent: React.FC = () => {
    const dispatch = useDispatch();
    const { services, selectedCategory, visibleIndexes} = useSelector(
        (state: RootState) => state.services
    );

    const theme = useTheme();

    useEffect(() => {
        if (services.length === 0) {
            dispatch(fetchServices());
        }
    }, [dispatch, services]);





    const categories = Array.from(new Set(services.flatMap(service => service.categories)));


    const filteredServices = selectedCategory
        ? services.filter((service) => service.categories.includes(selectedCategory))
        : services;


    const groupedServices = filteredServices.reduce((acc: Record<string, Service[]>, service) => {
        service.categories.forEach((category) => {
            if (!acc[category]) acc[category] = [];
            acc[category].push(service);
        });
        return acc;
    }, {});


    const handleNext = (category: string) => {
        const currentIndex = visibleIndexes[category] || 0;
        const newIndex = Math.min(currentIndex + 1, (groupedServices[category]?.length || 0) - 4);
        dispatch(setVisibleIndexes({ category, index: newIndex }));
    };

    const handlePrev = (category: string) => {
        const currentIndex = visibleIndexes[category] || 0;
        const newIndex = Math.max(currentIndex - 1, 0);
        dispatch(setVisibleIndexes({ category, index: newIndex }));
    };

    const handleCategoryChange = (category: string) => {
        dispatch(setSelectedCategory(category));
    };

    return (
        <Container sx={{ '@media (min-width: 370px)': { minHeight: '800px', backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#FAEBE3', color: theme.palette.mode === 'dark' ? '#fff' : '#000' } }}>
            <img src="/img/logos.png" alt="Logo" style={{ margin: '41px 0 10px 0', maxHeight: '140px', width: '100%' }} />
            <Filter categories={categories} selectedCategory={selectedCategory} onChange={handleCategoryChange} />

            {selectedCategory ? (
                <Container sx={{ height: '390px', backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#FAEBE3', overflow: 'hidden', position: 'relative' }}>
                    <Box display="flex" justifyContent="right" gap="8px" mb={2} marginTop="43px">
                        <Typography sx={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 700 }}>SEE ALL</Typography>
                        <Button
                            size="small"
                            sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#222' : '#000', color: 'white', borderRadius: '50px', padding: 0, minWidth: 0, width: '24px', height: '24px', boxSizing: 'border-box', '&:hover': { backgroundColor: 'gray' } }}
                            onClick={() => handlePrev(selectedCategory)}
                        >
                            <img src="./img/Triangle.svg" />
                        </Button>
                        <Button
                            sx={{ padding: 0, minWidth: 0, backgroundColor: theme.palette.mode === 'dark' ? '#222' : '#000', color: 'white', width: '24px', height: '24px', borderRadius: '50px', '&:hover': { backgroundColor: 'gray' } }}
                            onClick={() => handleNext(selectedCategory)}
                        >
                            <img src="./img/Triangle2.png" />
                        </Button>
                    </Box>
                    <Grid container spacing={2.5} sx={{ paddingBottom: '20px', marginLeft: '-33px', '@media (max-width: 400px)': { marginLeft: '20px' }, '@media (max-width: 700px) and (min-width: 400px)': { marginLeft: '30px' }, backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#FAEBE3' }}>
                        {(groupedServices[selectedCategory] || []).slice(visibleIndexes[selectedCategory] || 0, (visibleIndexes[selectedCategory] || 0) + 4).map((service) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={service.id}> {/* Використовуємо service.id як ключ */}
                                <ServiceCard {...service} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            ) : (
                Object.entries(groupedServices).map(([category, services]) => (
                    <div key={category}>
                        <Container sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '48px' }}>
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                                <Typography variant="h5" sx={{ fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 700, lineHeight: '32.4px', letterSpacing: '0.32967033982276917px', textAlign: 'left', textTransform: 'uppercase', marginLeft: '-22px' }}>
                                    {category}
                                </Typography>
                            </Box>
                            <Box display="flex" mb={2} gap="8px">
                                <Typography sx={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 700 }}>SEE ALL</Typography>
                                <Button sx={{ padding: 0, minWidth: 0, backgroundColor: theme.palette.mode === 'dark' ? '#222' : '#000', color: 'white', width: '24px', height: '24px', borderRadius: '50px', '&:hover': { backgroundColor: 'gray' } }} onClick={() => handlePrev(category)}>
                                    <img src="./img/Triangle.svg" />
                                </Button>
                                <Button sx={{ padding: 0, minWidth: 0, backgroundColor: theme.palette.mode === 'dark' ? '#222' : '#000', color: 'white', width: '24px', height: '24px', borderRadius: '50px', '&:hover': { backgroundColor: 'gray' } }} onClick={() => handleNext(category)}>
                                    <img src="./img/Triangle2.png" />
                                </Button>
                            </Box>
                        </Container>
                        <Grid container spacing={2.5} sx={{ height: '320px', overflow: 'hidden', position: 'relative', backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#FAEBE3' }}>
                            {services.slice(visibleIndexes[category] || 0, (visibleIndexes[category] || 0) + 4).map((service) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={service.id}> {/* Використовуємо service.id як ключ */}
                                    <ServiceCard {...service} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ))
            )}
        </Container>
    );
};

export default MainContent;
