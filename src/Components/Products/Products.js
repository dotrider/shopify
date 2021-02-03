import React from 'react';
import Product from '../Product/Product';
import { Grid } from '@material-ui/core';




export const Products = ({products, addToCart}) => {
    console.log('product', products)
    return (
        <div>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => <Grid item key={product.id} xs={12} sm={6} lg={3}>
                    <Product product={product} addToCart={addToCart} />
                </Grid>)}
            </Grid>
        </div>
    )
}

export default Products
