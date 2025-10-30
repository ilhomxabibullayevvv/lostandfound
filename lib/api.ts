export type Item = {
    id?: string;
    imageUrl: string;
    name: string;
    location: string;
    date: string;
    type: 'lost' | 'found';
    status: 'active' | 'done';
};

const BASE = process.env.NEXT_PUBLIC_API_BASE;

export async function fetchItems() {
    const res = await fetch(`${BASE}/items`);
    if (!res.ok) throw new Error('Failed to fetch items');
    return res.json() as Promise<Item[]>;
}

export async function createItem(item: Item) {
    const res = await fetch(`${BASE}/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
    });
    return res.json();
}

export async function updateItem(id: string, patch: Partial<Item>) {
    const res = await fetch(`${BASE}/items/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patch),
    });
    return res.json();
}
