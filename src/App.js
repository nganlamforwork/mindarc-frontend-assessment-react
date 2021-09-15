import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Pages/homepage'
import Exercise1 from './Pages/exercise1'
import Exercise2 from './Pages/exercise2';
import Banana from './Pages/banana'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    height: '100%',
    alignText: 'center',
    width: '100%'
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/banana" component={Banana} />
          <Route exact path="/exercise1" component={Exercise1} />
          <Route exact path="/exercise2" component={Exercise2} />
        </Switch>
      </Router>
      
    </div>
  );
}
