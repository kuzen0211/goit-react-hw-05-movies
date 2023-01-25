import { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleInputChange = evt => {
    const query = evt.target.value;
    setSearch(query);
  };

  const handleFormSubmit = evt => {
    evt?.preventDefault();
    const { value } = evt?.target.elements.search;
    const query = value || '';

    onSubmit({ query });
    setSearch('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        title="field for entering search query"
        required
        value={search}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
