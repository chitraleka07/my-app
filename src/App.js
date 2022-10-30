

import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './Screen/Home';
import { applyMiddleware,legacy_createStore as createStore} from "redux";
import reducers from "./Reducer/reducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import DisplayPhoto from './Screen/DisplayPhoto'
const store = createStore(reducers, applyMiddleware(thunk));

function App() {
  return (
    <div>
       <Provider store={store}>
        <Router>
      
        <Routes>
        <Route path="/" element={<Home/>}>
        </Route>

        <Route path="/photo/:id" element={<DisplayPhoto/>}/>
        </Routes>

      </Router>
      
      </Provider>
    </div>
  );
}

export default App;
