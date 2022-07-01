import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import CatList from './CatList';
import CreatePage from './CreatePage';
import { useState, useEffect } from 'react';
import { getCats, logoutUser } from './services/fetch-utils';
import CatDetail from './CatDetail';
import DeletePage from './DeletePage';
import UpdatePage from './UpdatePage';
import AuthPage from './AuthPage';

function App() {
  const [catList, setCatList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  async function handleLogout() {
    await logoutUser();
    location.replace('/');
    setCurrentUser({});
  }

  useEffect(() => {
    async function load() {
      if (currentUser.id) {
        const cats = await getCats();
        setCatList(cats);
      }
    }
    load();
  }, [currentUser]);

  return (
    <Router>
      <div className="App">
        <header>
          <NavLink to="/cats">Home</NavLink>
          <NavLink to="/create">Add A Cat</NavLink>
          <button onClick={handleLogout}>Log out</button>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {currentUser.id ? (
                <Redirect to="/cats" />
              ) : (
                <AuthPage setCurrentUser={setCurrentUser} />
              )}
            </Route>
            <Route exact path="/cats">
              {currentUser.id ? <CatList catList={catList} /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/cats/:id">
              {currentUser.id ? <CatDetail /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/create">
              {currentUser.id ? <CreatePage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/delete/:id">
              {currentUser.id ? <DeletePage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/update/:id">
              {currentUser.id ? <UpdatePage /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
