import React from 'react';
import {UsersType} from "../../redux/store";
import s from './Users.module.css'
import User from "./User";
import Paginator from "../../Paginator/Paginator";

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

    let styleUserBlock = {
        display: 'flex', justifyContent: "space-around", flexDirection: "column", flexWrap: 'wrap'
    } as const

    return (

        <div className={s.usersMainContainer}>

            <div style={styleUserBlock}>

                <Paginator currentPage={props.currentPage} portionSize={5} pageSize={props.pageSize} totalItemsCount={props.totalUsersCount}/>

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
            <Paginator currentPage={props.currentPage} portionSize={5} pageSize={props.pageSize} totalItemsCount={props.totalUsersCount}/>
        </div>
    );
};

export default Users;
