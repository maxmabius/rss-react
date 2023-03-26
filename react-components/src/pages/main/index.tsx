import * as React from 'react';

import Card from '../../components/card';

import { fakeUsers } from './fake-users';

import './index.css';

interface Props {
  children?: React.ReactNode;
}

interface State {
  searchValue: string;
}

export default class Main extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      searchValue: localStorage.getItem('searchValue') || '',
    };

    this.save = this.save.bind(this);

    window.onbeforeunload = this.save;
  }

  componentWillUnmount() {
    this.save();
  }

  save() {
    localStorage.setItem('searchValue', this.state.searchValue);
  }

  changeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  render() {
    const filteredFakeUsers = fakeUsers.filter((user) =>
      user.firstName.toLocaleLowerCase().includes(this.state.searchValue.toLowerCase())
    );

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
          {filteredFakeUsers.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
}
