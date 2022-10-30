import React from 'react'
import {useEffect} from 'react';
import Image from '../component/Image';
import SearchBar from '../component/SearchBar';
import { useDispatch, useSelector } from "react-redux";
import {FetchPhotos} from '../Actions/actions'

import {Link} from 'react-router-dom'

function Home() {
    const dispatch=useDispatch();
    const photos = useSelector((state) => state.data.photos);

  
    useEffect(()=>{
      dispatch(FetchPhotos());
    },[])

  return (
    <div className="container">
        <SearchBar/>
        <div className="card-list">
         {
            photos.map((pic)=>{
          return  <Link to={"/photo/"+pic.id} className="card" >
            <Image url={pic.urls.regular}/>
            </Link>
        })
      }
      </div>
    </div>
  )
}

export default Home