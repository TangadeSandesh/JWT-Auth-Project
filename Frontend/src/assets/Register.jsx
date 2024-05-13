import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Register() {
  const[formData, setformData]=useState({
    name:'',
    email:'',
    password:''
  })
  const navigate = useNavigate();

 const handleSubmit=(event) =>{
  event.preventDefault();
  axios.post('http://localhost:5000/register', formData)
  .then(res => {
    if(res.data.Status==="Success")
      {
        alert("Registration Successful");
        navigate('/login');
      }
      else{
        alert("Error")
      }
  })
  .catch(err => console.log(err));
  console.log("request is sent");
 }


  return (
    <div className='container-fluid mt-3 d-flex d-flex justify-content-center align-items-center bg-light vh-100'>
          <form onSubmit={handleSubmit}>
              <h2 className="text-center">
                REGISTER YOURSELF
              </h2>
              <div className="mb-3 mt-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name"
                onChange={e => setformData({...formData, name: e.target.value})}/>
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"
                onChange={e => setformData({...formData, email: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pwd" className="form-label">Password:</label>
                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"
                onChange={e => setformData({...formData, password: e.target.value})}
                />
              </div>
              <button type="submit" className="btn btn-success w-100 text-center my-2 mx-2">Submit</button>
              <Link to="/Login" className='btn btn-primary w-100 text-center my-2 mx-2'>Login</Link>
          </form>
    </div>
  )
}

export default Register
