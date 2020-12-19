import React from 'react';
import Product from '../Product/Product';
import { Grid } from '@material-ui/core';



//test api
const products = [
    { id:1, name: "T-shirt", description: "100% cotton", price: 10.00},
    { id: 2, name: 'Decal', description: 'No-sponsors logo', price: 7.00}
]


export const Products = () => {
    return (
        <div>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => <Grid item key={product.id} xs={12} sm={6} lg={3}>
                    <Product product={product} />
                </Grid>)}
            </Grid>
        </div>
    )
}

export default Products
