import React from 'react';
import {UsersType} from "../../redux/store";
import s from './Users.module.css'
import User from "./User";

type PropsType = {
    users: Array<UsersType>
    toggleFollow: (id: number) => void
    onClick: (count: number) => void
    currentPage: number
    pageSize: number
    totalUsersCount: number
    folliwingProgress: number[]
    followTC: (userID: number) => void
    unFollowTC: (userID: number) => void
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
        active: {color: "gold", backgroundColor: 'blue', borderRadius: '5px', padding: '5px',},
        noactive: {color: "white", backgroundColor: 'black', borderRadius: '5px', padding: '5px',}
    } as const

    return (

        <div className={s.usersMainContainer}>

            {pages.map(el => <button key={el} onClick={() => {
                props.onClick(el)
            }} style={props.currentPage === el ? styleButton.active : styleButton.noactive}>{el}</button>)}

            <div style={styleUserBlock}>

                {props.users.map(el => {
                    return (
                        <div key={el.id}><User status={el.status}
                                               id={el.id}
                                               photos={el.photos}
                                               followed={el.followed}
                                               folliwingProgress={props.folliwingProgress}
                                               followTC={props.followTC}
                                               unFollowTC={props.unFollowTC}
                                               name={el.name}/></div>

                    )
                })}
            </div>
        </div>
    );
};

export default Users;
