import React, { useEffect, useState } from 'react';
import axios from "axios";


const UsersLocal = () => {
    const [list, setList] = useState([]);

    const getLocalData = () => {
        axios.get("http://localhost:8000/api/users")
            .then((res) => {
                setList(res.data);
                console.log(res.data, "Fetched data");
            })
            .catch((err) => console.error("Error fetching data", err));
    };

    useEffect(() => {
        getLocalData();
    }, []);

    return (
        <div>
            <h2>Users List</h2>
            {list.length === 0 ? (
                <p>Loading or no data found...</p>
            ) : (
                <ul>
                    {list.map(user => (
                        <li key={user.id}>
                            {user.first_name} {user.last_name} - {user.job_title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UsersLocal;
