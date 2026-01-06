'use client';


export default function Filters({ setQuery, setType, setStatus }: any) {
    return (
        <div className="bg-white p-4 rounded-xl shadow flex flex-wrap gap-3">
            <input
                placeholder="Search item"
                className="border rounded px-3 py-2 flex-1"
                onChange={e => setQuery(e.target.value)}
            />
            <select className="border rounded px-3 py-2" onChange={e => setType(e.target.value)}>
                <option value="all">All Types</option>
                <option value="lost">Lost</option>
                <option value="found">Found</option>
            </select>
            <select className="border rounded px-3 py-2" onChange={e => setStatus(e.target.value)}>
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="done">Done</option>
            </select>
        </div>
    );
}