import React, { Fragment, Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Card.css'

function Card() {

    const handleAdd = () => {
        
    }
    const handleDelete = () => {
        
    }

    return (
        <div className="row">
            <Carousel>
                <div className="card-body col-sm-6 col-xs-6 col-md-6 col-6">
                    <div className="top">
                        <div className="wrapper">
                            <p className="temp">
                                <span className="temp-value">20</span>
                                <span className="deg">0</span>
                                <a href=""><span className="temp-type">C</span></a>
                            </p>
                            <h1 className="heading">Clear night</h1>
                            <h3 className="location">Dhaka, Bangladesh</h3>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="button-wrapper">
                            <div>
                                <button className='button button-add' onClick={handleAdd()}>Add</button>
                            </div>
                            <div>
                                <button className='button button-delete' onClick={handleDelete()}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body col-sm-6 col-xs-6 col-md-6 col-6">
                    <div className="top">
                        <div className="wrapper">
                            <p className="temp">
                                <span className="temp-value">20</span>
                                <span className="deg">0</span>
                                <a href=""><span className="temp-type">C</span></a>
                            </p>
                            <h1 className="heading">Clear night</h1>
                            <h3 className="location">Dhaka, Bangladesh</h3>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="button-wrapper">
                            <div>
                                <button className='button button-add'>Add</button>
                            </div>
                            <div>
                                <button className='button button-delete'>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body col-sm-6 col-xs-6 col-md-6 col-6">
                    <div className="top">
                        <div className="wrapper">
                            <p className="temp">
                                <span className="temp-value">20</span>
                                <span className="deg">0</span>
                                <a href=""><span className="temp-type">C</span></a>
                            </p>
                            <h1 className="heading">Clear night</h1>
                            <h3 className="location">Dhaka, Bangladesh</h3>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="button-wrapper">
                            <div>
                                <button className='button button-add'>Add</button>
                            </div>
                            <div>
                                <button className='button button-delete'>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body col-sm-6 col-xs-6 col-md-6 col-6">
                    <div className="top">
                        <div className="wrapper">
                            <p className="temp">
                                <span className="temp-value">20</span>
                                <span className="deg">0</span>
                                <a href=""><span className="temp-type">C</span></a>
                            </p>
                            <h1 className="heading">Clear night</h1>
                            <h3 className="location">Dhaka, Bangladesh</h3>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="button-wrapper">
                            <div>
                                <button className='button button-add'>Add</button>
                            </div>
                            <div>
                                <button className='button button-delete'>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default Card;
