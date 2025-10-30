'use client';
import { Item } from '../lib/api';

type Props = { item: Item; onMarkDone: (id: string) => Promise<void> };

export default function ItemCard({ item, onMarkDone }: Props) {
    return (
        <div className="border rounded p-4 flex gap-4 bg-white shadow-sm">
            <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded" />
            <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.location}</p>
                <p className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
                <p className="text-xs mt-1">
                    Type: <b>{item.type}</b> | Status: <b>{item.status}</b>
                </p>
            </div>
            {item.status === 'active' && (
                <button
                    onClick={() => item.id && onMarkDone(item.id)}
                    className="px-3 py-1 bg-blue-600 text-white rounded h-fit self-center"
                >
                    Mark Done
                </button>
            )}
        </div>
    );
}
