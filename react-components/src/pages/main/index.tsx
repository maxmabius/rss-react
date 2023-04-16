import * as React from 'react';

import Cards from './cards';

import { useAppDispatch, useAppSelector } from '../../store';
import { searchUsersSlice } from '../../store/search-users';

import './index.css';

export default function Main() {
  const dispatch = useAppDispatch();
  const [searchValue, search] = React.useState(
    useAppSelector((state) => state.searchUsers.name) || ''
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    search(event.target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(searchUsersSlice.actions.setName(searchValue));
  };

  return (
    <div className="main-page">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          className="input"
          placeholder="Search by first and last name..."
          onChange={handleSearch}
          value={searchValue}
        />
        <button type="submit">search</button>
      </form>

      <Cards />
    </div>
  );
}
