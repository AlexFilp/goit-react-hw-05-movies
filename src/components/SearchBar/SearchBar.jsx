import { useState } from 'react';
import { Btn, Form, Input } from './SearchBar.styled';

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
    <Form onSubmit={onHandleSubmit}>
      <Input
        onChange={onHandleChange}
        name="query"
        value={query}
        type="text"
        autoComplete="off"
        placeholder="Film name"
      />
      <Btn type="submit">Search</Btn>
    </Form>
  );
};
