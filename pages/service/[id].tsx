import { GetServerSideProps } from 'next';
import { services, Service } from '../../components/sevises';
import { Container, Typography, Box } from '@mui/material';

interface ServiceDetailPageProps {
    service: Service;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service }) => {
    return (
        <Container>
            <Box>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{service.title}</Typography>
                <Typography variant="body1">{service.description}</Typography>
                <Box component="img" src={service.image} alt={service.title} sx={{ width: '100%', marginTop: '20px' }} />
                <Typography variant="h6" sx={{ marginTop: '10px' }}>Price: {service.price}</Typography>
            </Box>
        </Container>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!; // отримуємо id з URL
    const service = services.find(service => service.id === Number(id)); // шукаємо сервіс за id

    if (!service) {
        return { notFound: true }; // якщо сервіс не знайдено
    }

    return {
        props: { service }, // передаємо сервіс як пропс
    };
};

export default ServiceDetailPage;
