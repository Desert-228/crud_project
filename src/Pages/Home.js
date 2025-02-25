import React, { useEffect, useState } from 'react'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { Link,useParams} from 'react-router-dom';

function Home() {
  const [users, setUsers] = useState([]);

  const {id} = useParams();

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/users");
      setUsers(result.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    loadUsers()
  }, []);



  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/user/${id}`);
      loadUsers(); 
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user. Please check the backend.");
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`}>View</Link>
                  <Link className="btn btn-outline-primary mx-2" to ={`/edituser/${user.id}`}>Edit</Link>
                  <button onClick={()=>deleteUser(user.id)} className="btn btn-danger mx-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
