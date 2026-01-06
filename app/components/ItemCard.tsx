'use client';
import { Item } from '../lib/api';


export default function ItemCard({ item, onDone }: { item: Item; onDone: () => void }) {
    return (
        <div className="bg-white rounded-xl shadow p-4 flex gap-4">
            <img src={item.image} className="w-24 h-24 rounded object-cover" />
            <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.location} • {item.date}</p>
                <div className="flex gap-2 mt-2">
                    <span className={`text-xs px-2 py-1 rounded ${item.type === 'lost' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                        {item.type}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${item.status === 'active' ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600'}`}>
                        {item.status}
                    </span>
                </div>
                {item.status === 'active' && (
                    <button onClick={onDone} className="mt-3 text-sm bg-emerald-600 text-white px-3 py-1 rounded">
                        Mark Done
                    </button>
                )}
            </div>
        </div>
    );
}