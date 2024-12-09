
export const fetchServicesApi = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return posts.slice(0, 10).map((post: any, index: number) => ({
        id: post.id,
        title: post.title,
        description: post.body,
        image: `https://picsum.photos/250/140?random=${index + 1}`,
        price: Math.floor(Math.random() * 1000) + 100,
        categories: ['Category 1', 'Category 2'],
        country: 'Ukraine',
    }));
};
