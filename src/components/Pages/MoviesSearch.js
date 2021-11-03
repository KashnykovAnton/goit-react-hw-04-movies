import { useState } from 'react';

const MoviesSearch = ({ onValueSubmit }) => {
  const [valueSearch, setValueSearch] = useState('');

  const handleChange = e => {
    // console.log('e.target.value:', e.target.value);
    setValueSearch(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (valueSearch.trim() === '') {
      alert('Введите корректное название!');
      return;
    }
    onValueSubmit(valueSearch);
    // console.log('valueSearch:', valueSearch);
    setValueSearch('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          value={valueSearch}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default MoviesSearch;
