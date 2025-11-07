'use client';
import { useEffect, useState } from 'react';
import { fetchItems, updateItem, Item } from '../lib/api';
import ItemCard from '../components/ItemCard';
import Filters from '../components/Filters';
import SearchBar from '../components/SearchBar';
import useDebounce from '../hooks/useDebounce';

export default function Page() {
  const [items, setItems] = useState<Item[]>([]);
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 400);

  useEffect(() => {
    fetchItems().then(setItems).catch(console.error);
  }, []);

  async function markDone(id: string) {
    await updateItem(id, { status: 'done' });
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, status: 'done' } : i)));
  }

  const filtered = items.filter((it) => {
    if (typeFilter !== 'all' && it.type !== typeFilter) return false;
    if (statusFilter !== 'all' && it.status !== statusFilter) return false;
    if (debouncedSearch && !it.name.toLowerCase().includes(debouncedSearch.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <SearchBar value={search} onChange={setSearch} />
        <Filters
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
      </div>

      <div className="grid gap-4">
        {filtered.length ? (
          filtered.map((item, index) => (
            <ItemCard
              key={`${item.id}-${index}`}
              item={item}
              onMarkDone={markDone}
            />
          ))
        ) : (
          <p>No items match your criteria.</p>
        )}
      </div>
    </div>
  );
}
