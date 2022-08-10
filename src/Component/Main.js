import React, { Fragment, Component } from 'react';
import Grid from '@mui/material/Grid';
import "./Main.css"

function Main() {
    return (
        <Grid container spacing={2} style={{ margin: "auto", marginTop: "50px", width: "80%" }}>
            <Grid item xs={12} sm={4} md={4}
                style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "350px", height: "350px" }}
            >
                <div className='item-container'>
                    <div className="image-container">
                        <img src={require('../assets/001.png')} className="image-body" />
                    </div>
                    <div className="button-container">
                        <div><img src={require('../assets/close.png')} className="button-body" /></div>
                        <div><img src={require('../assets/open.png')} className="button-body" /></div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4}
                style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "350px", height: "350px" }}
            >
                <div className='item-container'>
                    <div className="image-container">
                        <img src={require('../assets/002.png')} className="image-body" />
                    </div>
                    <div className="button-container">
                        <div><img src={require('../assets/close.png')} className="button-body" /></div>
                        <div><img src={require('../assets/open.png')} className="button-body" /></div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4}
                style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "350px", height: "350px" }}
            >
                <div className='item-container'>
                    <div className="image-container">
                        <img src={require('../assets/003.png')} className="image-body" />
                    </div>
                    <div className="button-container">
                        <div><img src={require('../assets/close.png')} className="button-body" /></div>
                        <div><img src={require('../assets/open.png')} className="button-body" /></div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4}
                style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "350px", height: "350px" }}
            >
                <div className='item-container'>
                    <div className="image-container">
                        <img src={require('../assets/004.png')} className="image-body" />
                    </div>
                    <div className="button-container">
                        <div><img src={require('../assets/close.png')} className="button-body" /></div>
                        <div><img src={require('../assets/open.png')} className="button-body" /></div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4}
                style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "350px", height: "350px" }}
            >
                <div className='item-container'>
                    <div className="image-container">
                        <img src={require('../assets/005.png')} className="image-body" />
                    </div>
                    <div className="button-container">
                        <div><img src={require('../assets/close.png')} className="button-body" /></div>
                        <div><img src={require('../assets/open.png')} className="button-body" /></div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4}
                style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "350px", height: "350px" }}
            >
                <div className='item-container'>
                    <div className="image-container">
                        <img src={require('../assets/006.png')} className="image-body" />
                    </div>
                    <div className="button-container">
                        <div><img src={require('../assets/close.png')} className="button-body" /></div>
                        <div><img src={require('../assets/open.png')} className="button-body" /></div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4}
                style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "350px", height: "350px" }}
            >
                <div className='item-container'>
                    <div className="image-container">
                        <img src={require('../assets/007.png')} className="image-body" />
                    </div>
                    <div className="button-container">
                        <div><img src={require('../assets/close.png')} className="button-body" /></div>
                        <div><img src={require('../assets/open.png')} className="button-body" /></div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4}
                style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "350px", height: "350px" }}
            >
                <div className='item-container'>
                    <div className="image-container">
                        <img src={require('../assets/008.png')} className="image-body" />
                    </div>
                    <div className="button-container">
                        <div><img src={require('../assets/close.png')} className="button-body" /></div>
                        <div><img src={require('../assets/open.png')} className="button-body" /></div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4}
                style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "350px", height: "350px" }}
            >
                <div className='item-container'>
                    <div className="image-container">
                        <img src={require('../assets/009.png')} className="image-body" />
                    </div>
                    <div className="button-container">
                        <div><img src={require('../assets/close.png')} className="button-body" /></div>
                        <div><img src={require('../assets/open.png')} className="button-body" /></div>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

export default Main;
