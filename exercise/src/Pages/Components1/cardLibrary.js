import React from 'react';
import MediaCard from './card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { CardActions, Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin:"5% 2%"
    },
    gridContainer:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
  }));

const cards = [0,1,2];
const innerText=[
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
]

export default function CardLibrary(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={3} className={classes.gridContainer}>
                    {cards.map((card) =>(
                        <Grid item key={card} xs={12} sm={6} md={4}>
                        <MediaCard className={classes.cards} content={innerText[card]}/>
                        </Grid>
                    ))} 
                </Grid>
            </Container>
        </div>
  
    )
}