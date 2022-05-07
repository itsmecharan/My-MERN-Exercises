import axios from 'axios';
import React, { useState,useEffect } from 'react';

export default function Offerdescription(props) {
    const [offerdata,setOfferdata]=useState(Array);
    useEffect(()=>{
        axios.get(`/get/offer/${props.id}`)
        .then((res)=>{
            console.log([...res.data]);
            setOfferdata([...res.data]);
            //console.log([...res.data]);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return (
        <div>
            {
                offerdata.map((data)=>{
                    return(
                        <div>
                                
                                <img src={data.ProductImage} width="300" height="300" />
                                <br />
                                {data.ProductName} <br />
                                {data.CategoryName} <br />
                                {data.OfferPercentage}<br />
                                {data.OfferFromDate}<br />
                                {data.OfferTodate} <br />
                                {data.OfferPercentage} <br />
                                {data.OfferingShopId} <br />
                                {data.ShopName} <br />
                                {data.Location}

                        </div>
                        
                    )
                })
            }
        </div>
    )
}
