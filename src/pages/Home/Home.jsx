import React from 'react';
import Colleges from '../Colleges/Colleges';
import Gallery from '../Gallery/Gallery';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/portrait-female-teacher-holding-notepad-green_140725-149620.jpg')` }}>
                <div className=""></div>
                {/* hero-overlay bg-opacity-60 */}
                
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-black">Offering access to high-quality <br />education for everyone</h1>
                        <p className="mb-5 text-black font-bold">Access 2500+ online courses</p>
                       
                    </div>
                </div>
            </div>
            <Gallery></Gallery>
            <Colleges></Colleges>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;