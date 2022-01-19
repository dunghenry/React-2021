import Header from 'components/header';
import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PageRender from './PageRender';
import { addUser } from 'redux/slice/authSlice';

import {useAppDispatch , useAppSelector} from 'redux/hooks';

function App() {
  const {currentUser, loading} = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(addUser({name: 'DungHenry'}))
  }, []);
  // console.log(currentUser, loading)
  return (
    <Router>
      <Header/>
      <Switch>
          <Route path="/" component={PageRender} exact />
          <Route path="/:page" component={PageRender} exact />
          <Route path="/:page/:id" component={PageRender} exact />
      </Switch>
    </Router>
  );
}

export default App;
