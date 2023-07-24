import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png"
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }
    const navItems = <>
        <li><Link to="/">Home</Link> </li>
        {/* <li> <Link to="/blog">Blog</Link> </li> */}
        {/* <li> <Link to="/login">Login</Link> </li> */}
        {user?.email ? <>
            {/* <li><Link to="/addcollege">Add College</Link></li> */}
            {/* <li><Link to="/allToy">All Toys</Link></li> */}
            <li><Link to="/mycollege">My College</Link></li>
            <li><Link to="/admission">Admission</Link></li>
            <li><button onClick={handleLogOut}>Log out</button></li>
            
        </>
            : <>
                <li><Link to="/mycollege">My College</Link></li>
                 <li><Link to="/admission">Admission</Link></li>
                <li> <Link to="/login">Login</Link> </li></>

        }

    </>
    return (
        <div className="navbar  h-16 mb-4 bg-sky-900">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl ">
                    <img src={logo} style={{width:"250px",height:"50px"}} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white font-bold">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end me-5">
                {/* <button className="btn btn-outline btn-warning">Login</button> */}
                {/* <Link to='/login'>
                    <button style={{ backgroundColor: "white", color: "blue", border: "blue", width: "80px", height: "40px", borderRadius: "10px" }}>Login</button>
                </Link> */}
                {/* {
                    user?.photoURL ? <img style={{ width: '50px', marginRight: "15px", borderRadius: '50%' }} src={user.photoURL} alt="" /> : <></>
                } */}
                {
                    user?.photoURL ? <img style={{ width: '50px', marginRight: "15px", borderRadius: '50%' }} src={user.photoURL} alt="" /> : <FaUserCircle style={{ fontSize: '30px' }}></FaUserCircle>
                }
            </div>
        </div>
    );
};

export default Navbar;