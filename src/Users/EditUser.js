import React, { useState ,useEffect} from 'react';
import { Link,useNavigate ,useParams} from 'react-router-dom';

import axios from "axios";

function EditUser() {

    let navigate = useNavigate()

    const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Edit user</h2>
                <form onSubmit={onSubmit}>
                <div className='md-3'>
                    <label htmlFor='Name' className='form-label'>
                        Name
                    </label>
                    <input type="text" className='form-control' placeholder='Enter your name' name="name" value={name} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='md-3'>
                    <label htmlFor='Username' className='form-label'>
                        Username
                    </label>
                    <input type="text" className='form-control' placeholder='Enter your Username' name="username" value={username} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='md-3'>
                    <label htmlFor='Email' className='form-label'>
                        Email
                    </label>
                    <input type="email" className='form-control' placeholder='Enter your email' name="email" value={email} onChange={(e)=>onInputChange(e)}/>
                </div>
                <br></br>
                <div className='text-center m-2'>
                    <button className='btn btn-outline-primary m-2'>Submit</button>
                    <Link className='btn btn-outline-danger' to= "/">Cancel</Link>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default EditUser