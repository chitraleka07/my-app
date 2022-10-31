import React from 'react'
import { useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import  {FetchPhoto} from '../Actions/actions'

import { RWebShare } from "react-web-share";


function DisplayPhoto() {
    const [downloadURL,setDownloadURL]=useState("")

    let photoDetails=useSelector(state=>state.data.photo);
    console.log(photoDetails)
    const {id}=useParams();
    const dispatch=useDispatch();
    const clientId=process.env.CLIENT_ID?process.env.CLIENT_ID:"LTsb1Y9pWEJjfEFJfG2Huncr8PBu3L--FFoZF_yIP3Q";
    
    useEffect(()=>{
        photoDetails=null;
        dispatch(FetchPhoto(id));
    },[])

    const fetchURL=async(geturl)=>{
        const download=await fetch(geturl);
        const {url}=await download.json();
        console.log(url)
        setDownloadURL(url)
        return url;
    }
    const handleDownload=async(id)=>{
        var element = document.createElement("a");
     
        try{
        let url=fetchURL(`https://api.unsplash.com/photos/${id}/download?&client_id=${clientId}`)
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
        
        <br/>
        {
            photoDetails? <center><div className="container-fluid">
                <div class="container-img">
      <img className="image" src={photoDetails?(photoDetails.urls.regular?photoDetails.urls.small:photoDetails.urls.thumb):""} alt={photoDetails?photoDetails.description:""}/>
    </div>
           
        <div className="flex-details">
            <label>Name:</label>{photoDetails.exif.name}<br/>
            <label>likes:</label>{photoDetails.likes}<br/>
            <label>Download:</label>{photoDetails.downloads}<br/>
            <button type="button" onClick={(e)=>handleDownload(id)} class="btn btn-success">download</button>
            <br/><br/>
            <RWebShare
        data={{
          text: photoDetails.exif.name,
          url: downloadURL,
          title: photoDetails.exif.name,
        }}
        onClick={() => {fetchURL(`https://api.unsplash.com/photos/${id}/download?&client_id=${clientId}`);console.log("shared successfully!")}}
      >
        <button class="btn btn-success">Share on Web</button>
      </RWebShare>
            <br/>
            {photoDetails.description ?(<>
            <h4>Description</h4>
            <p>{photoDetails.description}</p></>):null}
        </div>
        </div></center>:null
        }
       
    </div>
  )
}

export default DisplayPhoto