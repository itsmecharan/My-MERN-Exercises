import React,{useState,useEffect} from 'react';
import Select from 'react-select';
import axios from 'axios';

export default function Addoffer() {
    const [productname,setProductname]=useState(String);
    const [productimage,setProductimage]=useState(String);
    const [offerfromdate,setOfferfromdate]=useState(Date);
    const [offertodate,setOffertodate]=useState(Date);
    const [offerpercentage,setOfferpercentage]=useState(Number);
    const [shopid,setShopid]=useState(String);
    const [shopname,setShopname]=useState(String);
    const [location,setLocation]=useState(String);
    const [options,setOptions]=useState(Array);
    const [message,setMessage] = useState(String);
    const [selectedcategory,setSelectedcategory]=useState(String);
    
    useEffect(()=>{
        axios.get('/get/category')
        .then((res)=>{
            setOptions([...res.data]);
            setSelectedcategory([...res.data][0]);
        })
        .catch((err)=>{
            console.log(err);

        })
    },[])
    const addoffer=(e)=>{
        e.preventDefault();
        //console.log(selectedcategory);
        axios.post('/post/offers',{
           productname:productname,
           productimage:productimage,
           productcategory:selectedcategory,
           offerfromdate:offerfromdate,
           offertodate:offerfromdate,
           offerpercentage:offerpercentage,
           shopid:shopid,
           shopname:shopname,
           location:location
        })
        .then((res)=>{
            setMessage(res.data.message)
            console.log(res.data);
        })
        .catch((err)=>{
            setMessage(err);
            console.log(err);
        })
    }
   

    return (
        <div >
            <div className="addofferheading">Add new offered products</div>
            <div>
            <form onSubmit={(e)=>{addoffer(e)}} className="grid-container">
            
            <div className="grid-item">
            <label>Product Name</label>
            <input type="text" placeholder="product name" required value={productname} className="form-control"
            onChange={(e)=>setProductname(e.target.value)} />
           </div>
            
            <div className="grid-item">
            <label >Product Image</label>
            <input type="text" placeholder="enter image url" required value={productimage} className="form-control"
            onChange={(e)=>setProductimage(e.target.value)}/>
           </div>
            <div className="grid-item">
            <label > Select Category</label>
            <select onChange={(e)=>{setSelectedcategory(e.target.value)}} value={selectedcategory}
            className="form-select">
               {
                options.map((opt)=>(<option value={opt}>{opt}</option>))
               }
            </select>
            </div>
               <div className="grid-item">
            <label > Add Offer Percentage</label>
            <input type="number" value={offerpercentage}  required 
            onChange={(e)=>{setOfferpercentage(e.target.valueAsNumber)}} className="form-control"/>
            </div>
           
           <div className="grid-item">
             <label>Add Offer From Date</label>
            <input type="date" placeholder="dd-mm-yyyy" 
            required onChange={(e)=>{setOfferfromdate(e.target.valueAsDate)}} className="form-control"/> 
            </div>
            <div className="grid-item">
            <label>Add Offer To Date</label>
            <input type="date" placeholder="dd-mm-yyyy"
            required onChange={(e)=>setOffertodate(e.target.valueAsDate)} className="form-control"/>
            </div>
            <div className="grid-item">
            <label > Add Shop Id</label>
            <input type="text" value={shopid} placeholder="Add Shop Id" 
            required onChange={(e)=>{setShopid(e.target.value)}} className="form-control"/> 
           </div>
           <div className="grid-item">
            <label >Add Shop Name</label> 
            <input type="text" value={shopname} placeholder="Add Shop Name" required 
            onChange={(e)=>setShopname(e.target.value)} className="form-control"/>
            </div>
            <div className="grid-item">
            <label >Add Shop Location</label> 
            <input type="text" placeholder="Add Shop Location" value={location} required
            onChange={(e)=>setLocation(e.target.value)} className="form-control"/>
            </div>
            <div className="addofferbtn">
            <button type="submit" className="btn btn-primary btn-block">Add Offer</button>
            </div>
            </form>
            {
                message !== ''?
                message
                :
                null
            }
           </div>
           
            
           
        </div>
    )
}
