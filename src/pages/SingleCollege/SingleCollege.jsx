import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCollege = () => {
    const college = useLoaderData();
    //useTitle('View Details');
    console.log(college)
    const { image, collegename, date, event, sports, reasearch,admission } = college;
    return (
        <div className="card  glass">
      <figure><img style={{ width: "700px", height: "500px" }} src={image} alt="car!" /></figure>
      <div className="card-body ms-10">
        <h2 className="card-title">Name: {collegename}</h2>
        <p>Admission date: {date}</p>
        <p>Events:{event}</p>
        <p>Sports: {sports}</p>
        <p>Reasearch: {reasearch}</p>
        <p>Admission: {admission}</p>
        {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div> */}
      </div>
    </div>
    );
};

export default SingleCollege;