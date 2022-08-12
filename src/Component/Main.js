import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import "./Main.css"
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

function Main() {

    const [cardData, setCardData] = useState([]);
    const [allCardData, setAllCardData] = useState([]);

    useEffect(() => {
        getAllData()
    }, []);

    const getAllData = () => {
        axios
            .get("https://62f38b87a84d8c9681261221.mockapi.io/pokemon-data/getCard")
            .then((res) => {
                let dataArray = res.data.filter((item) => {
                    return item.show == true
                })
                setCardData(dataArray)
                setAllCardData(res.data)
            })
            .catch((err) => {
                console.log("err", err)
            })
    };
    const deleteData = (id) => {
        axios
            .put(`https://62f38b87a84d8c9681261221.mockapi.io/pokemon-data/getCard/${id}`, { show: false })
            .then((res) => {
                getAllData()
            })
            .catch((err) => {
                console.log("err", err)
            })
    };

    const postData = () => {
        for (var i = allCardData.length - 1; i >= 0; i--) {
            console.log("carddata",allCardData[i]);
        }
        // axios
        //     .post(`https://62f38b87a84d8c9681261221.mockapi.io/pokemon-data/getCard/${id}`, { show: false })
        //     .then((res) => {
        //         console.log("res", res.data)
        //         getAllData()
        //     })
        //     .catch((err) => {
        //         console.log("err", err)
        //     })
    };

    return (
        <Grid container spacing={2} style={{}}>
            <Grid item xs={12} sm={12} md={12}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff", position: "fixed", width: "100%", zIndex: "12", paddingInline: "50px", paddingTop: "40px" }}>
                <div>
                    <img src={require('../assets/pokemon.png')} className="logo" />
                </div>
                <div>
                    <Button variant='contained' color='success' onClick={()=>{postData()}}>Add Pokemon</Button>
                </div>
            </Grid>
            <Grid container spacing={2} style={{ margin: "auto", marginTop: "100px", width: "80%" }}>
                {
                    cardData.map((data) => {
                        return (
                            <Grid item xs={12} sm={6} md={4}
                                style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "350px", height: "350px" }}
                            >
                                <div className={`item-container-${data.type} item-container`}>
                                    <div className="bottom-left" style={{ color: "#fff" }}>
                                        <img src={require('../assets/close.png')} className="button-body" />
                                    </div>
                                    <div className="top-left" style={{ color: "#fff" }}>
                                        <div className="image-container">
                                            <img src={require(`../assets/${data.image}.png`)} className="image-body" />
                                        </div>
                                    </div>
                                    <div className="midd" onClick={() => { deleteData(data.id) }}>
                                        <Button style={{ color: "#fff" }}><DeleteIcon /></Button>
                                    </div>
                                    <div className="bottom-right" style={{ color: "#fff" }}>
                                        <img src={require('../assets/open.png')} className="button-body" />
                                    </div>
                                    <div className="centered" style={{ color: "#fff", opacity: "0.3", textAlign: "center" }}>
                                        <div style={{ fontSize: "80px" }}>{data.id}</div>
                                        <div>{(data.type).toUpperCase() + " " + "TYPE"}</div>
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
