import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
    height: '100%',
    alignText: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20%',
  },
  links: {
    textDecoration: 'none',
  }
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
        <Link to="/exercise1" className={classes.links}> 
            <Button size="large" variant="contained" color="primary">
                Exercise 1
            </Button>
        </Link>
        <Link to="/exercise2" className={classes.links}> 
            <Button size="large" variant="contained" color="primary">
                Exercise 2
            </Button>
        </Link>
        <Link to="/Banana" className={classes.links}> 
            <Button size="large" variant="contained" color="primary">
                Bonus Question
            </Button>
        </Link>
    </div>
  );
}
