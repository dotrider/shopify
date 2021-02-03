import React from 'react';
import  { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

const Product = ({product:{name, description, price}}) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} title={name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography dangerouslySetInnerHTML={{ __html: name}}  variant="h5" gutterBottom/>
                    <Typography variant="h5">
                        {price.formatted_with_code}
                    </Typography>
                </div>
                    <Typography dangerouslySetInnerHTML={{ __html: description}} variant="body2" color="textSecondary"/>
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