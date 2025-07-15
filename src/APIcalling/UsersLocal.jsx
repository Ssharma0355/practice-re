import React, { useEffect, useState } from 'react';
import axios from "axios";


const UsersLocal = () => {
    const [input, setInput] =useState("");
    const [result, setResult] = useState([])
    const [list, setList] = useState([]);

    const getLocalData = () => {
        axios.get("http://localhost:8000/api/users")
            .then((res) => {
                setList(res.data);
                console.log(res.data, "Fetched data");
            })
            .catch((err) => console.error("Error fetching data", err));
    };

    const getUserbyid =()=>{
        axios.get("http://localhost:8000/api/users?name=" + input)
            .then((res) => setResult(res.data))
    }



    useEffect(() => {
        getLocalData();
    }, []);

    useEffect(()=>{
        let timer = setTimeout(()=>{
            getUserbyid();
        },300)

        return function(){
            clearInterval(timer);
        }
    },[input])

    console.log(result);

    return (
        <div>
            <h2>Users List</h2>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
            <div>
                {result.length > 0 && result.map((r, id)=>(<span className='list' key={id}>{r.first_name}</span>))}
            </div>
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
