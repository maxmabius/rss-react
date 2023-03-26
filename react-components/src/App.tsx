import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout';
import Main from './pages/main';
import CreateForm from './pages/create-form';
import About from './pages/about';
import NoMatch from './pages/no-match';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<CreateForm />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
