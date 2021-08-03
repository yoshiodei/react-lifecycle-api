import React,{useState,useEffect} from 'react';


const UsersFunction = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users =>{ 
            console.log("users", users);
            setUsers(users);
        })
        .catch(err => err.message)
    }
  , []);

    return (
           <>
            <h1 style={{textAlign: "center"}}>Function Component</h1>
             {users.map(user =>{
                 return(
                    <div className="card">
                        <p>Name: {user.name}</p>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                    </div>
                 );
             })

             }   
            </> 
    );
}

export default UsersFunction;
