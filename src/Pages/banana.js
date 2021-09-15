import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainHeader:{
        fontWeight: "bold",
        margin: 0,
        paddingTop: 150,
        paddingBottom: 150,
        textAlign: "center"
    }
  }));

export default function Banana(){
    const classes = useStyles();
    return (
        <>
            <Typography className = {classes.mainHeader} variant="h4" align="center">
            'b' + 'a' + + 'a' equal to 'b' + 'a' + NaN + 'a'. So the toLowerCase() method will make the string become 'banana'
            </Typography>
        </>
    )
}