import React from 'react';
import  { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

const Product = ({product:{id, name, description, price}}) => {
console.log(id, name, description, price)

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} title={name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="h5">
                        {price}
                    </Typography>
                </div>
                    <Typography variant="body2" color="textSecondary">{description}</Typography>
                    <CardActions className={classes.cardActions} disableSpacing>
                        <IconButton aria-label="Add to Cart">
                            <AddShoppingCart/>
                        </IconButton>
                    </CardActions>
            </CardContent>
        </Card>
    )
}

export default Product