export const API_URL = process.env.NEXT_PUBLIC_API_URL as string;


export type Item = {
    id: string;
    image: string;
    name: string;
    location: string;
    date: string;
    type: 'lost' | 'found';
    status: 'active' | 'done';
};


export const getItems = async (): Promise<Item[]> => {
    const res = await fetch(API_URL, { cache: 'no-store' });
    return res.json();
};


export const addItem = async (item: Omit<Item, 'id'>) => {
    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
    });
};


export const markDone = async (id: string) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'done' }),
    });
};