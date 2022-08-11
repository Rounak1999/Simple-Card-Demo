import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import "./Main.css"
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

function Main() {

    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        handleData()
    },[]);

    let Data = [
        {
            "id": "001",
            "image": "001",
            "type": "grass"
        },
        {
            "id": "002",
            "image": "002",
            "type": "grass"
        },
        {
            "id": "003",
            "image": "003",
            "type": "grass"
        },
        {
            "id": "004",
            "image": "004",
            "type": "fire"
        },
        {
            "id": "005",
            "image": "005",
            "type": "fire"
        },
        {
            "id": "006",
            "image": "006",
            "type": "fire"
        },
        {
            "id": "007",
            "image": "007",
            "type": "water"
        },
        {
            "id": "008",
            "image": "008",
            "type": "water"
        },
        {
            "id": "009",
            "image": "009",
            "type": "water"
        },
        {
            "id": "010",
            "image": "010",
            "type": "poison"
        },
        {
            "id": "011",
            "image": "011",
            "type": "poison"
        },
        {
            "id": "012",
            "image": "012",
            "type": "poison"
        },
        {
            "id": "013",
            "image": "013",
            "type": "poison"
        },
        {
            "id": "014",
            "image": "014",
            "type": "poison"
        },
        {
            "id": "015",
            "image": "015",
            "type": "poison"
        },
        {
            "id": "016",
            "image": "016",
            "type": "special"
        },
        {
            "id": "017",
            "image": "017",
            "type": "special"
        },
        {
            "id": "018",
            "image": "018",
            "type": "special"
        }
    ];

    const handleData = () => {
        axios
            .get("https://62f38b87a84d8c9681261221.mockapi.io/pokemon-data/getCard")
            .then((res) => { 
                console.log("res", res.data)
                setCardData(res.data)
             })
            .catch((err) => { 
                console.log("err", err)
             })
    };

    return (
        <Grid container spacing={2} style={{}}>
            <Grid item xs={12} sm={12} md={12}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff", position: "fixed", width: "100%", zIndex: "12", paddingInline: "50px", paddingTop: "40px" }}>
                <div>
                    <img src={require('../assets/pokemon.png')} className="logo" />
                </div>
                <div>
                    <Button variant='contained' color='success'>Add Pokemon</Button>
                </div>
            </Grid>
            <Grid container spacing={2} style={{ margin: "auto", marginTop: "100px", width: "80%" }}>
                {
                    cardData.map((data) => {
                        return (
                            <Grid item xs={12} sm={6} md={4}
                                style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "350px", height: "350px" }}
                            >
                                <div className={`${data.type === "grass" ? "item-container-grass" : data.type === "fire" ? "item-container-fire" : data.type === "water" ? "item-container-water" : ""} item-container`}>
                                    <div className="bottom-left" style={{ color: "#fff" }}>
                                        <img src={require('../assets/close.png')} className="button-body" />
                                    </div>
                                    <div className="top-left" style={{ color: "#fff" }}>
                                        <div className="image-container">
                                            <img src={require(`../assets/${data.image}.png`)} className="image-body" />
                                        </div>
                                    </div>
                                    <div className="midd">
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
