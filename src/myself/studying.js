import React from 'react'
import { Link, useLocation} from "react-router-dom";
  
export default function Studying() {
   const location = useLocation();
 
   console.log(location.state.value)
 return (
    <div className='App-header'>
     Did you liked studying ? ?
  <div className='buttondiv'>
 
     <Link to="/myself/friendsinschool"state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton">do uzupełnienia</Link> 
     <Link to="/myself/friendsinschool"state={{
          value: location.state.value +2
        }} className="btn btn-primary custombutton">do uzupełnienia</Link>
     <Link to="/myself/friendsinschool"state={{
          value: location.state.value +3
        }} className="btn btn-primary custombutton">do uzupełnienia</Link>

     <div>koniec segmentu myself - podsumowanie</div>
     </div>
     </div>
 );
}