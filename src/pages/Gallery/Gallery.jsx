import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <div>
            <h1 className='text-center font-bold text-6xl mt-4 mb-4'>Our Gallery</h1>
            <div data-aos="zoom-in" data-aos-delay="300" className="avatar grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2">
                <div className="w-96 mask mask-hexagon">
                    <img src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"/>
                </div>
                <div className="w-96 mask mask-hexagon">
                    <img src="https://media.npr.org/assets/img/2020/04/01/gettyimages-200164090-001-copy-65a81f5b446a1dcce4344d5d9a7b95b285d8b92b-s1100-c50.jpg"/>
                </div>
                <div className="w-96 mask mask-hexagon">
                    <img src="https://cdn.pixabay.com/photo/2015/08/08/00/07/graduation-879941_640.jpg"/>
                </div>
            </div>
        </div>
    );
};

export default Gallery;