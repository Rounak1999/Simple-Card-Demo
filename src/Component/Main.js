import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import "./Main.css"
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

function Main() {

    const [cardData, setCardData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllData()
    }, []);

    const getAllData = () => {
        setIsLoading(true)
        axios
            .get("https://62f38b87a84d8c9681261221.mockapi.io/pokemon-data/getCard")
            .then((res) => {
                let dataArray = res.data.filter((item) => {
                    return item.show == true
                })
                setCardData(dataArray)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log("err", err)
                setIsLoading(false)
            })
    };
    const deleteData = (id) => {
        setIsLoading(true)
        axios
            .put(`https://62f38b87a84d8c9681261221.mockapi.io/pokemon-data/getCard/${id}`, { show: false })
            .then((res) => {
                getAllData()
                setIsLoading(false)
            })
            .catch((err) => {
                console.log("err", err)
                setIsLoading(false)
            })
    };

    const postData = () => {
        setIsLoading(true)
        console.log(cardData.length)
        if (cardData.length == 0) {
            axios
                .put(`https://62f38b87a84d8c9681261221.mockapi.io/pokemon-data/getCard/${1}`, { show: true })
                .then((res) => {
                    console.log("res", res.data)
                    getAllData()
                    setIsLoading(false)
                })
                .catch((err) => {
                    console.log("err", err)
                    setIsLoading(false)
                })
        }
        else {
            let i = cardData.length
            let j = cardData[i - 1]
            let id = parseInt(j.id) + 1
            axios
                .put(`https://62f38b87a84d8c9681261221.mockapi.io/pokemon-data/getCard/${id}`, { show: true })
                .then((res) => {
                    console.log("res", res.data)
                    getAllData()
                    setIsLoading(false)
                })
                .catch((err) => {
                    console.log("err", err)
                    setIsLoading(false)
                })
        }
    };

    return (
        <Grid container spacing={2}>

            <Grid item xs={12} sm={12} md={12}
                className={"card-header"}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff", position: "fixed", width: "100%", zIndex: "12", paddingInline: "50px", paddingTop: "40px" }}>

                <div>
                    <img src={require('../assets/pokemon.png')} className="logo" />
                </div>

                <div>
                    <Button variant='contained' color='success' onClick={() => { postData() }}>Add Pokemon</Button>
                </div>

            </Grid>
            {isLoading ?
                <div><img src={require('../assets/close.png')} className="loader" /></div>
                : null
            }
            <Grid container spacing={2}
                style={{ margin: "auto", marginTop: "100px", width: "80%" }}>
                {
                    cardData.length == 0 ?
                        <div  className='no-data'>Please Click On Add Pokemon Button</div> : null
                }
                {
                    cardData.map((data) => {
                        return (

                            <Grid item xs={12} sm={6} md={4}
                                style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "350px", height: "350px" }}
                            >

                                <div className={`item-container-${data.type} item-container`}>

                                    <div className="top-left">
                                        <div className="image-container">
                                            <img src={require(`../assets/${data.image}.png`)} className="image-body" />
                                        </div>
                                    </div>

                                    <div className="midd" onClick={() => { deleteData(data.id) }}>
                                        <Button style={{ color: "#fff" }}><DeleteIcon /></Button>
                                    </div>

                                    <div className="centered">
                                        <div className='centered-text'>{data.pokemon_no}</div>
                                        <div>{(data.type).toUpperCase() + " " + "TYPE"}</div>
                                    </div>

                                    <div className="bottom-left">
                                        <img src={require('../assets/close.png')} className="button-body" />
                                    </div>

                                    <div className="bottom-right">
                                        <img src={require('../assets/open.png')} className="button-body" />
                                    </div>

                                </div>

                            </Grid>
                        );
                    })
                }
            </Grid>
        </Grid>
    );
}

export default Main;
