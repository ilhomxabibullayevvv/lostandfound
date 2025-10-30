'use client';
type Props = { value: string; onChange: (v: string) => void };

export default function SearchBar({ value, onChange }: Props) {
    return (
        <input
            type="text"
            placeholder="Search by item name..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-2 border rounded"
        />
    );
}
