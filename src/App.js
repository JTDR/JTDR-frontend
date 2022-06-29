import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import CatList from './CatList';
import { useState, useEffect } from 'react';
import { getCats } from './services/fetch-utils';
import Cat from './Cat';

function App() {
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    async function load() {
      const cats = await getCats();
      setCatList(cats);
    }
    load();
  }, []);

  return (
    <Router>
      <div className="App">
        <header>
          <NavLink to="/cats">Home</NavLink>
        </header>
        <main>
          <Switch>
            <Route exact path="/cats">
              <CatList catList={catList} />
            </Route>
            <Route exact path="/cats/:id">
              <Cat />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
