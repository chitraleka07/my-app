

const { combineReducers } = require("redux");
  
const INITAL_STATE  = {
    photos : [],
    photo:null
}
  
const dataReducer = (state=INITAL_STATE, action)=>{
    switch(action.type) {
        case 'FETCH_DATA' : return {...state, photos : action.payload};
        case 'QUERY_DATA' : return {...state, photos : action.payload};
        case 'FETCH_PHOTO': return {...state,photo:action.payload};
        default : return state;
    }
}
  
const reducers = combineReducers({
    data : dataReducer
})
  
export default reducers