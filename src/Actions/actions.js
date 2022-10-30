
 const clientId=process.env.CLIENT_ID?process.env.CLIENT_ID:"LTsb1Y9pWEJjfEFJfG2Huncr8PBu3L--FFoZF_yIP3Q";

 export const FetchPhotos  = ()=>{
 
     return async (dispatch,getState)=>{
 
          
         const response = await fetch(`https://api.unsplash.com/photos/random?count=10&client_id=${clientId}`);
         const data = await response.json();
         dispatch({
             type : 'FETCH_DATA',
             payload : data
         });
     }
 }

 export const FetchPhoto=(id)=>{
    return async (dispatch,getState)=>{
 
          
        const response = await fetch(`https://api.unsplash.com/photos/${id}?&client_id=${clientId}`);
        const data = await response.json();
        dispatch({
            type : 'FETCH_PHOTO',
            payload : data
        });
    }
 }
 
 export const QueryedPhotos=(query)=>{
     return async (dispatch,getState)=>{
       const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${clientId}`);
       const data = await response.json();
       console.log(data)
       dispatch({
           type : 'QUERY_DATA',
           payload : data.results
       });
   }
 }