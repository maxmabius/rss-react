import * as React from 'react';

import Card from './card';

import { fakeUsers } from './fake-users';
import type { User } from './fake-users';

import './index.css';

interface Props {
  children: React.ReactNode;
}

interface State {
  searchValue: string;
  fakeUsers: User[];
}

export default class MainPage extends React.Component<Props, State> {
  public state: State = {
    searchValue: '',
    fakeUsers,
  };

  changeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filteredFakeUsers = fakeUsers.filter((user) =>
      user.firstName.toLocaleLowerCase().includes(event.target.value.toLowerCase())
    );

    this.setState({
      searchValue: event.target.value,
      fakeUsers: filteredFakeUsers,
    });
  };

  render() {
    return (
      <div className="main-page">
        <input
          type="text"
          className="input"
          placeholder="Filter by first name..."
          onChange={this.changeSearchValue}
          value={this.state.searchValue}
        />
        <div className="list">
          {this.state.fakeUsers.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
}
