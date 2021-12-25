import React, { useState } from 'react';

export default function SearchForm({ searchText }) {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        searchText(text)
    }

    return (
        <div>
            <h2>Search by name</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search by name" onChange={(e) => setText(e.target.value)} />
                <button
                    type="submit"
                    className="bg-green-400 py-1 px-2 rounded-r-lg text-white"
                >Search
                </button>
            </form>
        </div>
    )
}
