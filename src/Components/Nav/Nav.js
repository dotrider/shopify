import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

const Nav = () => {
    return (
        <>
            <AppBar position="fixed" color="inherit">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        <img src='' height="25px" alt="Shopify"/>
                            Shopify
                    </Typography>
                    <div className=""/>
                    <div className="">
                        <IconButton>
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Nav
