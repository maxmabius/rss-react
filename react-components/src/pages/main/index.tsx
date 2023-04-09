import * as React from 'react';
import { useLoaderData, Await, useNavigation, Form } from 'react-router-dom';

import Card from '../../components/card';
import Spinner from '../../components/spinner';

import type { user } from '../..//types';

import './index.css';

export default function Main() {
  const { users } = useLoaderData() as { users: (typeof user)[] };
  const { state: navigation } = useNavigation();

  const [searchValue, search] = React.useState(localStorage.getItem('searchValue') || '');
  const searchValueRef: React.MutableRefObject<string> = React.useRef<string>('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    search(event.target.value);
  };

  React.useEffect(() => {
    window.addEventListener('beforeunload', save);

    return () => {
      window.removeEventListener('beforeunload', save);
      save();
    };
  }, []);

  React.useEffect(() => {
    searchValueRef.current = searchValue;
  }, [searchValue]);

  const save = () => {
    localStorage.setItem('searchValue', searchValueRef.current);
  };

  const isSearching = navigation === 'loading';

  return (
    <div className="main-page">
      <Form className="search-form">
        <input
          type="search"
          name="search"
          className="input"
          placeholder="Search by first and last name..."
          onChange={handleSearch}
          value={searchValue}
        />
        <button type="submit" className="search-button" disabled={isSearching}>
          {isSearching ? 'searching' : 'search'}
        </button>
      </Form>

      <div className="list">
        <React.Suspense fallback={<Spinner />}>
          <Await resolve={users}>
            {(data: (typeof user)[]) => {
              if (data.length === 0) {
                return <div>The robots could not be found...</div>;
              }

              return (
                <React.Fragment>
                  {data.map((user) => (
                    <Card key={user.id} user={user} />
                  ))}
                </React.Fragment>
              );
            }}
          </Await>
        </React.Suspense>
      </div>
    </div>
  );
}
