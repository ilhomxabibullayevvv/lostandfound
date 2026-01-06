'use client';
import { useEffect, useMemo, useState } from 'react';
import { getItems, markDone, Item } from './lib/api';
import ItemCard from './components/ItemCard';
import Filters from './components/Filters';


export default function HomePage() {
  const [items, setItems] = useState<Item[]>([]);
  const [type, setType] = useState('all');
  const [status, setStatus] = useState('all');
  const [query, setQuery] = useState('');
  const [debounced, setDebounced] = useState('');


  useEffect(() => { getItems().then(setItems); }, []);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(query), 400);
    return () => clearTimeout(t);
  }, [query]);


  const filtered = useMemo(() => items.filter(i =>
    (type === 'all' || i.type === type) &&
    (status === 'all' || i.status === status) &&
    i.name.toLowerCase().includes(debounced.toLowerCase())
  ), [items, type, status, debounced]);


  return (
    <main className="max-w-6xl mx-auto p-6 space-y-6">
      <Filters setQuery={setQuery} setType={setType} setStatus={setStatus} />
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map(item => (
          <ItemCard key={item.id} item={item} onDone={async () => {
            await markDone(item.id);
            setItems(prev => prev.map(i => i.id === item.id ? { ...i, status: 'done' } : i));
          }} />
        ))}
      </div>
    </main>
  );
}