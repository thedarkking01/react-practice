import React, { useState } from 'react';
import axios from 'axios';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Ref to keep track of the latest timeout
  const timeoutRef = React.useRef(null);

  // API call function to fetch data based on the query
  const fetchData = async (searchQuery) => {
    if (!searchQuery) return;

    try {
      setLoading(true);
      const response = await axios.get(`https://api.example.com/search?q=${searchQuery}`);
      setResults(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  // Handle input change and trigger debounced API call
  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    // Clear the previous timeout to reset the debounce timer
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout to delay the API call
    timeoutRef.current = setTimeout(() => {
      fetchData(newQuery);
    }, 500); // 500ms debounce time
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {loading && <p>Loading...</p>}
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
