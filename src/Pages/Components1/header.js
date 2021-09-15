import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        paddingTop: 150,
        paddingBottom: 150,
        color: "white",
        width: "100%",
        textAlign: "center"
    },
    mainHeader:{
        fontWeight: "bold"
    }
  }));

function Header(){
    const classes = useStyles();
    return (
        <div id = 'header' className = {classes.root}>
                <Typography className = {classes.mainHeader} variant="h2" align="center">
                    Hello Developers!
                </Typography>
                <Typography variant="h5" align="center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Typography>
        </div>
    )
}
export default Header;