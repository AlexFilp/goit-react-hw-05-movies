import { useState } from 'react';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onHandleChange = evt => {
    setQuery(evt.target.value);
  };

  const onHandleSubmit = evt => {
    evt.preventDefault();

    if (query.trim() === '') {
      alert('Please write something!');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        onChange={onHandleChange}
        name="query"
        value={query}
        type="text"
        autoComplete="off"
        placeholder="Film name"
      />
      <button type="submit">Search</button>
    </form>
  );
};
