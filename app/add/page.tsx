'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createItem, Item } from '../../lib/api';

export default function AddPage() {
    const router = useRouter();
    const [form, setForm] = useState<Item>({
        imageUrl: '',
        name: '',
        location: '',
        date: new Date().toISOString(),
        type: 'lost',
        status: 'active',
    });
    const [error, setError] = useState('');

    function update<K extends keyof Item>(k: K, v: Item[K]) {
        setForm((f) => ({ ...f, [k]: v }));
    }

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        if (!form.name || !form.imageUrl || !form.location) return setError('Please fill in all required fields');
        await createItem(form);
        router.push('/');
    }

    return (
        <form onSubmit={submit} className="space-y-4 max-w-lg">
            {error && <p className="text-red-600">{error}</p>}
            <input placeholder="Image URL" value={form.imageUrl} onChange={(e) => update('imageUrl', e.target.value)} className="w-full p-2 border rounded" />
            <input placeholder="Item Name" value={form.name} onChange={(e) => update('name', e.target.value)} className="w-full p-2 border rounded" />
            <input placeholder="Location" value={form.location} onChange={(e) => update('location', e.target.value)} className="w-full p-2 border rounded" />
            <input type="date" value={form.date.slice(0, 10)} onChange={(e) => update('date', new Date(e.target.value).toISOString())} className="w-full p-2 border rounded" />
            <select value={form.type} onChange={(e) => update('type', e.target.value as 'lost' | 'found')} className="w-full p-2 border rounded">
                <option value="lost">Lost</option>
                <option value="found">Found</option>
            </select>
            <select value={form.status} onChange={(e) => update('status', e.target.value as 'active' | 'done')} className="w-full p-2 border rounded">
                <option value="active">Active</option>
                <option value="done">Done</option>
            </select>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Add Item</button>
        </form>
    );
}
