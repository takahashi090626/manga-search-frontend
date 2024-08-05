import React, { useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import ComicItem from './components/ComicItem';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const comicsRef = collection(db, 'comics');
    const q = query(comicsRef, where('title', '>=', searchTerm), where('title', '<=', searchTerm + '\uf8ff'));
    
    try {
      const querySnapshot = await getDocs(q);
      const searchResults = [];
      querySnapshot.forEach((doc) => {
        searchResults.push({ id: doc.id, ...doc.data() });
      });
      setResults(searchResults);
    } catch (error) {
      console.error("Error searching documents: ", error);
    }
  };

  return (
    <div className="App">
      <h1>マンガ検索</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="マンガのタイトルを入力"
        />
        <button type="submit">検索</button>
      </form>
      <div className="results">
        {results.map((comic) => (
          <ComicItem key={comic.id} comic={comic} />
        ))}
      </div>
    </div>
  );
}

export default App;