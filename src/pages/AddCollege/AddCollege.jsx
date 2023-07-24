import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddCollege = () => {
    const { user } = useContext(AuthContext);
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://college-server-nine.vercel.app/addcollege', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'College Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
        console.log(data)
    };
    return (
        <div >
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ms-4 me-4">
                {errors.exampleRequired && <span>This field is required</span>}
                <div className="form-control">
                    {/* <input type="text" {...register("Toy Name")} placeholder="Toy Name" name="name" className="input input-bordered" /> */}
                    <input
                        className="input input-bordered"
                        {...register("collegename")}
                        placeholder="College Name"
                    
                    />
                </div>

                <div className="form-control">
                    {/* <input type="text" {...register("Seller Name")} placeholder="Seller Name" name="name" className="input input-bordered" /> */}
                    <input
                        className="input input-bordered"
                        {...register("date", { required: true })}
                        placeholder="Admission Date"
                        type='date'
                    />
                </div>
                <div className="form-control">
                    {/* <input type="text" {...register("price")} placeholder="Price" name="price" className="input input-bordered" /> */}
                    <input
                        className="input input-bordered"
                        {...register("event", { required: true })}
                        placeholder="Events"
                        
                    />
                </div>
                <div className="form-control">
                    <select className="input input-bordered" {...register("sports")}>
                        <option value="cricket">Cricket</option>
                        <option value="football">Football</option>
                        <option value="volleyball">Volley Ball</option>

                    </select>
                </div>


                <div className="form-control">
                    {/* <input type="text" {...register("image")} placeholder="Image" name="image" className="input input-bordered" /> */}
                    <input
                        className="input input-bordered"
                        {...register("image")}
                        placeholder="Image Link"
                        type="url"
                        
                    />
                </div>
                <div className="form-control">
                    <input
                        className="input input-bordered"
                        {...register("reasearch")}
                        placeholder="Reasearch"
                        type="text"
                    />
                </div>
                <div className="form-control">
                    {/* <input type="text-input" {...register("email")} placeholder="Email" type="email" className="input input-bordered" /> */}
                    <input
                        className="input input-bordered"
                        value={user?.email}
                        {...register("postedBy")}
                        placeholder="your email"
                        type="email"
                    />

                </div>
               
                <input
                    className="input input-bordered"
                    {...register("Admission")}
                    placeholder="Admission"
                />
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary  mx-auto" value="Add College" type="submit" />
            </div>
        </form>
    </div>


    );
};

export default AddCollege;