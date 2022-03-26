import React from 'react';
import {usersPageType, UsersType} from "../../redux/store";
import cat from '../../img/cat.png'
import axios from "axios";

type PropsType = {
    users: usersPageType
    toggleFollow: (id: number)=> void
    setUsers: (users: Array<UsersType>)=> void
}

const Users = (props: PropsType) => {

    let getUsers = ()=> {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
          props.setUsers(response.data.items)

      })}



/*props.setUsers( [
    {id: 1, name: 'Dimych', address: {city: 'Minsk', country: 'Belarus'}, follow: true},
    {id: 2, name: 'Dimych', address: {city: 'Minsk', country: 'Belarus'}, follow: true},
    {id: 3, name: 'Dimych', address: {city: 'Minsk', country: 'Belarus'}, follow: true},
])}*/

    return (
        <div>
            <button onClick={getUsers}>Get users</button>

            {props.users.users.map(el => {
                return (
                    <div key={el.id} style={{display:"inline-block", border: '1px solid wheat', margin: '20px', padding: '20px', borderRadius: '12px'}}>
                        <div>
                           <div><img style={{maxWidth: '40px', margin: '10px'}} src={el.photos.small || cat}/></div>
                            {el.name}
                        </div>
                        <div>
                            {el.status}

                        </div>
                        {el.followed ? <button onClick={()=>{props.toggleFollow(el.id)}}>follow</button> :
                        <button onClick={()=>{props.toggleFollow(el.id)}}>unFollow</button>}
                    </div>

                )
            })}
        </div>
    );
};

/*
export default Users;*/
