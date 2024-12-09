import { useState, useEffect } from 'react';

export interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    categories: string[];
    country: string;
}

const useFetchServices = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchServices = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            const posts = await res.json();


            const mappedServices = posts.slice(0, 10).map((post: any, index: number) => ({
                id: post.id,
                title: post.title,
                description: post.body,
                image: `https://picsum.photos/250/140?random=${index + 1}`,
                price: Math.floor(Math.random() * 1000) + 100,
                categories: ['Category 1', 'Category 2'],
                country: 'Ukraine',
            }));

            setServices(mappedServices);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    return { services, loading, error };
};

export default useFetchServices;
