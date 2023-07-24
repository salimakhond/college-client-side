import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
//import { AuthContext } from '../../providers/AuthProvider';
//import useTitle from '../../hooks/useTitle';
//import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const {createUser}=useContext(AuthContext);
    //useTitle('Register');
    const handleRegister=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(name,photo,email,password);
        createUser(email,password)
        .then(result=>{
            const createdUser=result.user
            console.log(createdUser)
            //updateUser(result.user,name,photo)
            e.target.reset();
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12">
                    <img src="https://static.vecteezy.com/system/resources/previews/005/879/539/original/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Register</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">
                                <input className="bg-sky-900 text-white h-10" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already have an account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                        {/* <SocialLogin></SocialLogin> */}
                        {/* <SocialLogin></SocialLogin> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;