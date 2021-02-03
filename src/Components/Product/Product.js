import React from 'react';
import  { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

const Product = ({product:{id, name, description, price, media}, addToCart}) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} title={name} image={media.source}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography dangerouslySetInnerHTML={{ __html: name}}  variant="h5" gutterBottom/>
                    <Typography variant="h5">
                        {price.formatted_with_code}
                    </Typography>
                </div>
                    <Typography dangerouslySetInnerHTML={{ __html: description}} variant="body2" color="textSecondary"/>
                    <CardActions className={classes.cardActions} disableSpacing>
                        <IconButton aria-label="Add to Cart" onClick={() => addToCart(id, 1)}>
                            <AddShoppingCart/>
                        </IconButton>
                    </CardActions>
            </CardContent>
        </Card>
    )
}

export default Product