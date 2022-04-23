import React from 'react';
import {UsersType} from "../../redux/store";
import cat from '../../img/cat.png'
import {NavLink} from "react-router-dom";
import s from './Users.module.css'



type PropsType = {
    users: Array<UsersType>
    toggleFollow: (id: number) => void
    onClick: (count: number) => void
    currentPage: number
    pageSize: number
    totalUsersCount: number
    folliwingProgress: number[]
    followTC: (userID: number)=> void
    unFollowTC: (userID: number)=> void
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



    return (
        <div className={s.usersMainContainer}>
            {pages.map(el => <button key={el} onClick={() => {
                props.onClick(el)
            }} style={props.currentPage === el ? styleButton.active : styleButton.noactive}>{el}</button>)}
            <div style={styleUserBlock}>

                {props.users.map(el => {
                    return (

                        <div key={el.id} className={s.styleUser}>

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


                                {el.status ? <div className={s.styleStatus}>{el.status}</div>
                                    : <div className={s.styleStatus}> place for status </div>}

                            </div>


                            {el.followed ?

                                <button disabled={props.folliwingProgress.some(id => id == el.id)} style={{margin: '10px'}} onClick={() => {
                                    props.followTC(el.id)
                                }}>unFollow</button>

                                : <button disabled={props.folliwingProgress.some(id => id == el.id)} style={{margin: '10px'}} onClick={() => {
                                    props.unFollowTC(el.id)
                                }}>follow</button>
                            }

                        </div>

                    )
                })}
            </div>
        </div>
    );
};

export default Users;
