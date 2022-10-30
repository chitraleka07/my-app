import React from 'react'
import {useEffect,useState} from 'react';
import { useDispatch } from 'react-redux';
import {QueryedPhotos} from '../Actions/actions'

function SearchBar() {
    const [data,setData]=useState("");
    const dispatch=useDispatch();

    const handleSearch=(e)=>{
        setData(e.target.value);
        console.log(data);
    }

    const handleSubmit=(e)=>{
       e.preventDefault();
      dispatch(QueryedPhotos(data))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" onChange={(e)=>handleSearch(e)} width="100%" />
        </form>
    </div>
  )
}

export default SearchBar