import React from 'react';
import {UsersType} from "../../redux/store";
import cat from '../../img/cat.png'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../Api/api";


type PropsType = {
    users: Array<UsersType>
    toggleFollow: (id: number) => void
    onClick: (count: number) => void
    currentPage: number
    pageSize: number
    totalUsersCount: number
}

const Users = (props: PropsType) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    let styleUserBlock = {
        display: 'flex', justifyContent: "space-around", flexDirection: "column", flexWrap: 'wrap'
    } as const

    let styleUser = {
        overflow: "hidden",
        backgroundColor: 'aquamarine',
        display: "flex",
        flexDirection: "column",
        border: '1px solid red',
        margin: '20px', padding: '20px',
        borderRadius: '12px',
        width: '350px',

    } as const

    let styleButton = {
        active: {color: "gold", backgroundColor: 'blue'},
        noactive: {color: "white", backgroundColor: 'black'}
    } as const

    let styleImgAndNameBlock = {
        display: "flex",
        justifyContent: "space-between",
        color: "gold", backgroundColor: 'blue',
        borderRadius: '12px', padding: '5px'
    } as const

    let styleStatus = {
        display: "flex",
        color: "blue",
        backgroundColor: 'gold',
        margin: '20px',
        borderRadius: '12px',
        padding: '10px'
    }

    return (
        <>
            {pages.map(el => <button key={el} onClick={() => {
                props.onClick(el)
            }} style={props.currentPage === el ? styleButton.active : styleButton.noactive}>{el}</button>)}
            <div style={styleUserBlock}>

                {props.users.map(el => {
                    return (

                        <div key={el.id} style={styleUser}>

                            <div style={styleImgAndNameBlock}>

                                <div style={{display: "flex"}}>
                                    <NavLink to={'/profile/' + el.id}>
                                        <img style={{
                                            width: '40px',
                                            height: '40px',
                                            margin: '10px',
                                            borderRadius: '15px'
                                        }} src={el.photos.small || cat}/>
                                    </NavLink>
                                    {el.name}
                                </div>


                                {el.status ? <div style={styleStatus}>{el.status}</div>
                                    : <div style={styleStatus}> place for status </div>}

                            </div>


                            {el.followed ?


                                <button style={{margin: '10px'}} onClick={() => {
                                    /*                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {withCredentials: true, headers: {
                                                                            'API-KEY': "82582742-7d7f-4c61-8ef1-26c44cad628c"
                                                                            }})*/

                                    usersAPI.unFollowUsers(el.id).then(resultCode => {
                                            if (resultCode === 0) {
                                                props.toggleFollow(el.id)
                                            }
                                        }
                                    )
                                }}>unFollow</button>

                                : <button style={{margin: '10px'}} onClick={() => {
                                    usersAPI.followUsers(el.id).then(resultCode => {
                                            if (resultCode === 0) {
                                                props.toggleFollow(el.id)
                                            }
                                        }
                                    )
                                }}>follow</button>
                            }

                        </div>

                    )
                })}
            </div>
        </>
    );
};

export default Users;
