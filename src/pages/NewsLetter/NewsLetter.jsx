import React from 'react';

const NewsLetter = () => {
    return (
        <div className='bg-sky-900 p-12 mt-6 mb-6 flex justify-between'>
            <div>
                <h1 className='text-white font-bold text-4xl'>NewsLetter</h1>
            </div>
            <div>
                <input type="text" placeholder='Enter Your Email' className='rounded-lg h-9 w-96 p-4 bg-sky-300 text-white'/>
            </div>
        </div>
    );
};

export default NewsLetter;