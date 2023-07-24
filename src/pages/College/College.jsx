import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const College = ({college}) => {
    const { _id,image, date,event,reasearch, sports, collegename    } = college || {};
    const {user}=useContext(AuthContext)
    const handlealert=()=>{
       if(!user){
        Swal.fire({
            icon: 'error',
            title: 'Sorry...',
            text: 'You have to log in first to view details!',
          })
    }
    }
    return (
        <div className="card glass ms-4 me-4" >
            <figure><img  style={{ width: "100%", height: "300px" }} src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{collegename}</h2>
                <p>{date}</p>
                {/* <p>{rating}</p> */}
                <p>{event}</p>
                <p>{reasearch}</p>
                <p>{sports}</p>
                
                <div className="card-actions justify-end">
                    <Link to={`singlecollege/${_id}`}>
                        <button onClick={()=>handlealert()} className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
        
    );
};

export default College;