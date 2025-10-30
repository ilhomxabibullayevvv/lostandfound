'use client';
type Props = {
    typeFilter: string;
    setTypeFilter: (v: string) => void;
    statusFilter: string;
    setStatusFilter: (v: string) => void;
};

export default function Filters({ typeFilter, setTypeFilter, statusFilter, setStatusFilter }: Props) {
    return (
        <div className="flex gap-2">
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="p-2 border rounded">
                <option value="all">All Types</option>
                <option value="lost">Lost</option>
                <option value="found">Found</option>
            </select>

            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="p-2 border rounded">
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="done">Done</option>
            </select>
        </div>
    );
}
