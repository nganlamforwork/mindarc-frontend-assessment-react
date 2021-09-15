import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        padding: 10,
        minWidth: 200,
        minHeight: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    media: {
        minHeight: 180,
    },
    btn:{
        borderRadius: 20,
        border: "2px solid black",
        fontWeight: "bold"
    },
});

export default function MediaCard(props) {
  const classes = useStyles();
    const Text=props.content;
  return (
    <Card className={classes.root} >
        <CardActionArea >
            <CardMedia
            className={classes.media}
            image="http://via.placeholder.com/400x300"
            title="Contemplative Reptile"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" align="center" component="p">
                    {Text}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button variant="outlined" size="small" className={classes.btn}>
                Read More
            </Button>
        </CardActions>
    </Card>
  );
}