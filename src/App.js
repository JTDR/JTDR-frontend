import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import CatList from './CatList';
import { useState, useEffect } from 'react';
import { getCats } from './services/fetch-utils';

function App() {
  const [catList, setCatList] = useState([]);

  async function load() {
    const cats = await getCats();
    console.log(cats);
    setCatList(cats.data.results);
  }

  useEffect(() => {
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
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
