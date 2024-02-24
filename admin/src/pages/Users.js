import React from 'react'
// import { useNavigate } from "react-router-dom"
import DeleteIcon from '@mui/icons-material/Delete';

const Users = ({ users, googleusers }) => {
    // const [users, setUsers] = useState([])

    // const handleRowClick = (userId) => {
    //     navigateTo(`/user-profile/${userId}`);
    // };
    return (
        <div className='users'>
            <div className='manage-users'>
                <h1 style={{ color: "#fff", marginBottom: "1rem" }}>Manage Users</h1>
                <table className='users-table'>
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {
                        users?.map((user, i) => (
                            <tbody key={user?._id}>
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.mobileno}</td>
                                    <td style={{cursor:"pointer"}}><DeleteIcon /></td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>
            <div className='manage-users'>
                <h1 style={{ color: "#fff", marginBottom: "1rem" }}>Users with Google Login</h1>
                <table className='users-table'>
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Email</th>
                            <th>Profile</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {
                        googleusers?.map((user, i) => (
                            <tbody key={user?._id}>
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{user?.email}</td>
                                    <td>
                                        <img style={{
                                            borderRadius:"50%",
                                            height:"50px",
                                            width:"50px",
                                            objectFit:"cover"
                                        }} 
                                        alt='google-img' src={user?.picture} referrerPolicy='no-referrer' />
                                    </td>
                                    <td style={{cursor:"pointer"}}><DeleteIcon /></td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>
        </div>
    )
}

export default Users