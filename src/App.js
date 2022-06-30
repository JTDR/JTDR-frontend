import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import CatList from './CatList';
import CreatePage from './CreatePage';
import { useState, useEffect } from 'react';
import { getCats } from './services/fetch-utils';
import CatDetail from './CatDetail';
import DeletePage from './DeletePage';
import UpdatePage from './UpdatePage';
import AuthPage from './AuthPage';

function App() {
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    async function load() {
      const cats = await getCats();
      setCatList(cats);
    }
    load();
  }, [catList]);

  return (
    <Router>
      <div className="App">
        <header>
          <NavLink to="/cats">Home</NavLink>
          <NavLink to="/create">Add A Cat</NavLink>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <AuthPage />
            </Route>
            <Route exact path="/cats">
              <CatList catList={catList} />
            </Route>
            <Route exact path="/cats/:id">
              <CatDetail />
            </Route>
            <Route exact path="/create">
              <CreatePage />
            </Route>
            <Route exact path="/delete/:id">
              <DeletePage />
            </Route>
            <Route exact path="/update/:id">
              <UpdatePage />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
