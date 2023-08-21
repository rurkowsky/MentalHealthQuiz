import * as React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App-header'>
     What kind of therapy are you looking for?
        
	 <div className='buttondiv'>
        <Link to="myself" className="btn btn-primary custombutton">For myself</Link> 
        <Link to="relationshipp" className="btn btn-primary custombutton">Relationship</Link>
        <Link to="children" className="btn btn-primary custombutton">Children</Link>
        </div>
       
    </div>
      );
      
    }
export default App


