import React, { useEffect, useState } from 'react';
import College from '../College/College';

const Colleges = () => {
    const [colleges,setColleges]=useState([]);
    const [active,setActive]=useState("cricket");
    useEffect(()=>{
        fetch('https://college-server-nine.vercel.app/allcollege')
        .then(res=>res.json())
        .then(data=>setColleges(data))
    },[])
    console.log(active);
    return (
        <div >
        <h1 className='text-center text-7xl mt-4 mb-5'>Our Colleges</h1>
        {/* <div className='ms-7'>
        <button onClick={()=>setActive("cricket")} className='button mb-4 me-3'>Cricket</button>
        <button onClick={()=>setActive("football")} className='button mb-4 me-3'>Football</button>
        <button onClick={()=>setActive("volleyball")} className='button mb-4'>Volley Ball</button>
        </div> */}
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {/* {colleges.map(college=> college.category === active && <College key={college._id} college={college}></College>)} */}
        {colleges.map(college=><College key={college._id} college={college}></College>)}
        </div>
        
    </div>
    );
};

export default Colleges;