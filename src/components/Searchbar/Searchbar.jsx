import React, { useState } from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchbarHeader,
} from './Searchbar.css';
import { FaSearch } from 'react-icons/fa';

export const Searchbar = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = event => {
    setSearchText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchText);
    setSearchText('');
  };

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <FaSearch size="32px" color="#3f51b5" />
        </SearchFormButton>

        <SearchFormInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchText}
          onChange={handleChange}
        />
      </SearchForm>
    </SearchbarHeader>
  );
};
