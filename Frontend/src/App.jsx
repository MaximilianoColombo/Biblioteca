// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import IndexPage from './pages/Index';
import BooksPage from './pages/Books';

const App = () => {

  return (
    <Router>
        <Layout>
          <Routes>
              <Route path="/" exact element={<IndexPage/>} />
              <Route path="/books" exact element={<BooksPage/>} />
          </Routes>
        </Layout>
    </Router>
  );
};

export default App;
