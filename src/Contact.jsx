import React, { useState } from 'react';
const Contact = () => {
    const [data,setData]=useState(
        {
            fullname:"",
            phone:"",
            email:"",
            message:""
        }
    );
    const InputEvent=(event)=>{
        const {name,value}= event.target;
        setData((prev)=>{
            return{
                ...prev,
                [name]: value
            }
        })
    }
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`My name is ${data.fullname} phone number: ${data.phone} email : ${data.email}. My message is ${data.message}`);
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Us </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your full name here"/>
                               
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Phone</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your contact number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Email</label>
                                <input type="email" class="form-control" id="exampleInputPassword1" name="email" value={data.email} onChange={InputEvent} placeholder="Enter your email id" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Message</label>
                                <textarea type="textarea" class="form-control" id="exampleInputPassword1" name="message" value={data.message} onChange={InputEvent} placeholder="Your message"/>
                            </div>
                            <button type="submit" class="btn btn-outline-primary" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;