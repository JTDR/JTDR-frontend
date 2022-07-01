import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import CatList from './CatList';
import CreatePage from './CreatePage';
import { useState, useEffect } from 'react';
import { getCats, getUser, logoutUser } from './services/fetch-utils';
import CatDetail from './CatDetail';
import DeletePage from './DeletePage';
import UpdatePage from './UpdatePage';
import AuthPage from './AuthPage';

function App() {
  const [catList, setCatList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  async function handleLogout() {
    await logoutUser();
    setCurrentUser({});
    window.location.replace('/');
  }

  useEffect(() => {
    async function load() {
      const cats = await getCats();
      setCatList(cats);
    }
    load();
  }, [currentUser]);

  useEffect(() => {
    async function load() {
      const currentUser = await getUser();
      setCurrentUser(currentUser);
    }
    load();
  }, []);

  return (
    <Router>
      <div className="App">
        <header>
          <NavLink to="/cats">Home</NavLink>
          <NavLink to="/create">Add A Cat</NavLink>
          <button onClick={handleLogout} >Log out</button>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <AuthPage setCurrentUser={setCurrentUser}/>
            </Route>
            <Route exact path="/cats">
              {currentUser ? <CatList catList={catList}/> : <Redirect to="/" />}
            </Route>
            <Route exact path="/cats/:id">
              {currentUser ? <CatDetail/> : <Redirect to="/" />}
            </Route>
            <Route exact path="/create">
              {currentUser ? <CreatePage/> : <Redirect to="/" />}
            </Route>
            <Route exact path="/delete/:id">
              {currentUser ? <DeletePage/> : <Redirect to="/" />}
            </Route>
            <Route exact path="/update/:id">
              {currentUser ? <UpdatePage/> : <Redirect to="/" />}
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
