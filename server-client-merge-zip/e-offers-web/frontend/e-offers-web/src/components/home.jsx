import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {
    Link
}
from 'react-router-dom';
//import Offerdescription from './offerdescription';

export default function Home(props) {
    const [offers,setOffers]=useState(Array);
    //const [offerid,setOfferid]=useState(String);
    useEffect(()=>{
        axios.get('/get/offers')
        .then((res)=>{
            console.log(res.data);
            setOffers([...res.data]);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    const sendId=(id)=>{
        props.getId(id)
     }
    return (
       
        <div>
        <div className="product-container">
            {
                offers.map
                ((offer)=>
                {
                    return(
                        <div className="product-item">
                        <img src={`${offer.ProductImage}`}width="300" height="200" /><br />
                         <div style={{fontWeight:"bold"}}>{offer.ProductName}</div>
                         {offer.ShopName}<br />
                         <b style={{fontWeight:"bold"},{color:"green"}}>Offer:{offer.OfferPercentage}%</b><br />
                        <Link to="/offerdescription" onClick={() => {sendId(offer._id)}} className="btn btn-primary btn-block">
                                    Explore</Link><br />
                        </div>
                    )
                })
            }
        </div>
        </div>
       
      
    )
}
