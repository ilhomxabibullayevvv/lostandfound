'use client';
import { useState } from 'react';
import { addItem } from '../lib/api';
import { useRouter } from 'next/navigation';


export default function AddPage() {
    const router = useRouter();
    const [form, setForm] = useState({ image: '', name: '', location: '', date: '', type: 'lost', status: 'active' });


    const submit = async (e: any) => {
        e.preventDefault();
        await addItem(form as any);
        router.push('/');
    };


    return (
        <main className="max-w-xl mx-auto p-6">
            <form onSubmit={submit} className="bg-white p-6 rounded-xl shadow space-y-3">
                <h2 className="text-xl font-bold">Add New Item</h2>
                <input className="border p-2 w-full" placeholder="Image URL" onChange={e => setForm({ ...form, image: e.target.value })} />
                <input required className="border p-2 w-full" placeholder="Item Name" onChange={e => setForm({ ...form, name: e.target.value })} />
                <input required className="border p-2 w-full" placeholder="Location" onChange={e => setForm({ ...form, location: e.target.value })} />
                <input required type="date" className="border p-2 w-full" onChange={e => setForm({ ...form, date: e.target.value })} />
                <select className="border p-2 w-full" onChange={e => setForm({ ...form, type: e.target.value })}>
                    <option value="lost">Lost</option>
                    <option value="found">Found</option>
                </select>
                <button className="bg-blue-600 text-white w-20 py-2 rounded">Save</button>
            </form>
        </main>
    );
}