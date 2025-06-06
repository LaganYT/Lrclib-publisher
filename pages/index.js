"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaSearch, FaMicrophone, FaCog } from 'react-icons/fa';

export default function Home() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search/${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="home-container">
      <div className="logo">
        <h1>LRCLIB-Frontend</h1>
      </div>
      <div className="search-bar">
        <FaSearch className="icon" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // Updated from onKeyPress
          placeholder="Search for lyrics..."
          className="input"
        />
      </div>
      <div className="links">
        <a href="https://lrclib.net/">Original Site</a>
        <a href="/publish">Publish Lyrics</a>
        <a href="https://github.com/LaganYT/LRCLIB-Frontend">Source code</a>
        <a href="https://lrclib.net/docs">API Documentation</a>
        <a href="https://lrclib.net/db-dumps">Database Dumps</a>
        <a href="https://github.com/tranxuanthang/lrclib?tab=readme-ov-file#donation">Donation to creator</a>
      </div>
    </div>
  );
}
