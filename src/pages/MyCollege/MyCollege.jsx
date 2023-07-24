import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const MyCollege = () => {
    const { user } = useContext(AuthContext);
    //useTitle('My Toys');
    const [colleges, setColleges] = useState([])
    useEffect(() => {
        fetch(`https://college-server-nine.vercel.app/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [user])
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                    <th>College Name</th>
                        <th>Events</th>
                        <th>Sports</th>
                        <th>Reasearch</th>
                        <th>Admission</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {colleges.map(college=>
                        
                        <tr key={college?._id}>
                        
                        <th>{college?.date}</th>
                        <td>{college?.collegename}</td>
                        <td>{college?.event}</td>
                        <td>{college?.sports}</td>
                        <td>{college?.reaseacch}</td>
                        <td>{college?.admission}</td>
                    </tr>)}
                </tbody>

            </table>
        </div>
    );
};

export default MyCollege;