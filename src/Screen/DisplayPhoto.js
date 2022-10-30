import React from 'react'
import { useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import  {FetchPhoto} from '../Actions/actions'


function DisplayPhoto() {
    const [downloadURL,setDownloadURL]=useState("")

    const photoDetails=useSelector(state=>state.data.photo);
    console.log(photoDetails)
    const {id}=useParams();
    const dispatch=useDispatch();
    
    useEffect(()=>{
        dispatch(FetchPhoto(id));
    },[])


    const handleDownload=async(id)=>{
        var element = document.createElement("a");
        const clientId=process.env.CLIENT_ID?process.env.CLIENT_ID:"LTsb1Y9pWEJjfEFJfG2Huncr8PBu3L--FFoZF_yIP3Q";
        try{
        const download=await fetch(`https://api.unsplash.com/photos/${id}/download?&client_id=${clientId}`);
        const {url}=await download.json();
        console.log(url)
        const response = await fetch(url);
        const file = await response.blob();
        element.href = URL.createObjectURL(file);
        element.download = "image.jpg";
        element.click();
        }
        catch(e){
            console.log(e);
        }
    }

  return (
    <div style={{display:'grid',placeItems:"center",width:"100%"}}>
        {
            photoDetails? <div className="flex-container">
            <div className="flex-img-container">
        <img className="img" src={photoDetails?(photoDetails.urls.regular?photoDetails.urls.regular:photoDetails.urls.thumb):""} alt={photoDetails?photoDetails.description:""}/>
        </div>
        <div className="flex-details">
            <label>Name:</label>{photoDetails.exif.name}<br/>
            <label>likes:</label>{photoDetails.likes}<br/>
            <label>Download:</label>{photoDetails.downloads}<br/>
            <button onClick={(e)=>handleDownload(id)}>download</button>
            
        </div>
        </div>:null
        }
       
    </div>
  )
}

export default DisplayPhoto