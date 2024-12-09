import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { userEmail } from '../../components/Header'; // Імпортуємо змінну userEmail

const FAVORITES_FILE = path.resolve(process.cwd(), 'favorites.json');

const readFavorites = () => {
    if (!fs.existsSync(FAVORITES_FILE)) {
        return [];
    }
    const data = fs.readFileSync(FAVORITES_FILE, 'utf-8');
    return JSON.parse(data);
};

const writeFavorites = (data: any) => {
    fs.writeFileSync(FAVORITES_FILE, JSON.stringify(data, null, 2));
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const favorites = readFavorites();
        res.status(200).json(favorites);
    } else if (req.method === 'POST') {
        const favorites = readFavorites();
        const newFavorite = req.body;


        console.log("userEmail перед записом:", userEmail);


        const favoriteWithEmail = {
            ...newFavorite,
            userEmail: userEmail,
        };


        console.log("Новий запис перед збереженням:", favoriteWithEmail);

        favorites.push(favoriteWithEmail);
        writeFavorites(favorites);
        res.status(200).json({ success: true });
    } else if (req.method === 'DELETE') {
        const favorites = readFavorites();
        const { id } = req.query;
        const updatedFavorites = favorites.filter((item: { id: number }) => item.id !== Number(id));
        writeFavorites(updatedFavorites);
        res.status(200).json({ success: true });
    } else {
        res.status(405).end();
    }
}
