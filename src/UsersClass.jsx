import React, { Component } from 'react';

class UsersClass extends Component {
    constructor(){
        super();

        this.state = {users: []}

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users =>{ 
            console.log("users", users);
            this.setState({users: users});
        })
        .catch(err => err.message)
    }

    render() {
        return (
            <>
             {this.state.users.map(user =>{
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
}

export default UsersClass;
