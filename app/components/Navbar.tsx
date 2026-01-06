'use client';
import Link from 'next/link';


export default function Navbar() {
    return (
        <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between">
            <h1 className="font-bold text-lg">Lost & Found</h1>
            <div className="space-x-4">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/add" className="hover:underline">Add Item</Link>
            </div>
        </nav>
    );
}