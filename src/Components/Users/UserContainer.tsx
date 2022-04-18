import React from 'react';
import {connect} from "react-redux";
import preloader from '../../img/Walk.gif'

import {ActionTypes, StateType, UsersType} from "../../redux/store";
import {
    setCurrentPage, setTotalUserCount,
    setUsers,
    toggleFollow, toggleIsFetching

} from "../../redux/userReducer";
import axios from "axios";
import Preloader from "../Preloader/Preloader";
import Users from "./Users";
import {usersAPI} from "../../Api/api";

type PropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    toggleFollow: (id: number)=> void
    setUsers: (users: Array<UsersType>)=> void
    currentPage: number
    setCurrentPage: (currentPage: number)=> void
    setTotalUserCount: (totalCount: number)=> void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean)=>void


}

class UsersContainer extends React.Component<PropsType>{

    componentDidMount(): void {
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data =>{
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUserCount(data.totalCount)

        })
    }

    onClick = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data =>{
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUserCount(data.totalCount)


        })
    }

    render(): React.ReactNode {



        return <div>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                toggleFollow={this.props.toggleFollow}
                onClick={this.onClick}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
            />

        </div>;
    }
}



let mapStateToProps = (state: StateType) =>{
   return {
       users: state.usersPage.users,
       pageSize: state.usersPage.pageSize,
       totalUsersCount: state.usersPage.count,
       currentPage: state.usersPage.currentPage,
       isFetching: state.usersPage.isFetching,
   }
}

export default connect(mapStateToProps, {
    toggleFollow, setUsers, setCurrentPage, setTotalUserCount, toggleIsFetching
})(UsersContainer);