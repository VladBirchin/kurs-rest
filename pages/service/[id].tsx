import { GetServerSideProps } from 'next';
import { Container, Typography, Box } from '@mui/material';

interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
}

interface ServiceDetailPageProps {
    service: Service;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service }) => {
    if (!service) {
        return <Typography variant="h6">Service not found</Typography>;
    }

    return (
        <Container>
            <Box>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    {service.title}
                </Typography>
                <Typography variant="body1">{service.description}</Typography>
                <Box component="img" src={service.image} alt={service.title} sx={{ width: '100%', marginTop: '20px' }} />
                <Typography variant="h6" sx={{ marginTop: '10px' }}>
                    Price: {service.price}
                </Typography>
            </Box>
        </Container>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!;

    // Отримуємо дані з API (приклад)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
        console.error('Failed to fetch services:', response.status);
        return { notFound: true };
    }

    // Перетворення отриманих даних на масив послуг
    const services: Service[] = await response.json();

    // Знаходимо потрібну послугу за ID
    const service = services.find(service => service.id === Number(id));

    if (!service) {
        return { notFound: true };
    }

    return {
        props: { service },
    };
};

export default ServiceDetailPage;
