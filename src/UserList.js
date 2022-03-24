import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [user, setUser] = useState([]);

    const fetchData = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUser(result.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>

            {user.map(user => (
                <ul>
                    <li key={user.id}>{user.name}</li>
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>{user.address.street}</li>
                    <li>{user.address.city}</li>
                </ul>
            ))}
        </>
    )
}

export default UserList