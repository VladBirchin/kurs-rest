export interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    categories: string[];
    country: string;
}

export const services: Service[] = [
    {
        id: 1,
        title: 'Haircut',
        description: 'Description of the haircut service Description of the haircut service Description of the haircut service Description of the haircut service',
        image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0',
        price: 300,
        categories: ['Haircut', 'Women', 'Men'],
        country: 'Ukraine'
    },
    {
        id: 2,
        title: 'Hair Coloring',
        description: 'Description of the hair coloring service',
        image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0',
        price: 500,
        categories: ['Hair Coloring', 'Women'],
        country: 'Ukraine'
    },
    {
        id: 3,
        title: 'Manicure',
        description: 'Description of the manicure service',
        image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0',
        price: 250,
        categories: ['Manicure', 'Women'],
        country: 'Ukraine'
    },
    {
        id: 4,
        title: 'Pedicure',
        description: 'Description of the pedicure service',
        image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0',
        price: 350,
        categories: ['Pedicure', 'Women'],
        country: 'Ukraine'
    },
    {
        id: 5,
        title: 'Facial Massage',
        description: 'Description of the facial massage service',
        image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0',
        price: 400,
        categories: ['Massage', 'Women'],
        country: 'Ukraine'
    },
    {
        id: 6,
        title: 'Eyelash Lamination',
        description: 'Description of the eyelash lamination service',
        image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0',
        price: 600,
        categories: ['Lamination', 'Women'],
        country: 'Ukraine'
    },
    {
        id: 7,
        title: 'Eyebrow Correction',
        description: 'Description of the eyebrow correction service',
        image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0',
        price: 150,
        categories: ['Eyebrows', 'Women'],
        country: 'Ukraine'
    },
    {
        id: 8,
        title: 'Fitness Training',
        description: 'Description of the fitness training service',
        image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0',
        price: 200,
        categories: ['Fitness', 'Men', 'Women'],
        country: 'Ukraine'
    },
    {
        id: 9,
        title: 'Spa Treatments',
        description: 'Description of the spa treatment service',
        image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0',
        price: 800,
        categories: ['Spa', 'Women'],
        country: 'Ukraine'
    },
    {
        id: 10,
        title: 'Cosmetology',
        description: 'Description of the cosmetology service',
        image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0',
        price: 1000,
        categories: ['Cosmetology', 'Women'],
        country: 'Ukraine'
    }
];
