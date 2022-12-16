import { useState } from 'react';

import { MainInput } from './SearchBar.styled';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setQuery(value);
  };

  return (
    <MainInput
      value={query}
      onChange={handleInput}
      placeholder="Search for cocktails and ingedients"
    />
  );
};

export default SearchBar;