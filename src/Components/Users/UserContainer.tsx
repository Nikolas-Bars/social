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
import UsersFunctional from "./Users";
import Preloader from "../Preloader/Preloader";

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)

        })
    }

    onClick = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>{
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)


        })
    }

    render(): React.ReactNode {



        return <div>
            {this.props.isFetching ? <Preloader /> : null}
            <UsersFunctional
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

/*let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) =>{
    return {
        toggleFollow: (id: number)=>{
            dispatch(userFollowingToggleAC(id))
        },
        setUsers:(users: Array<UsersType>)=> {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUserCount: (count: number)=>{
            dispatch(setTotalUserCountAC(count))

        },
        toggleIsFetching: ()=>{
            dispatch(toggleIsFetchingAC())
        },
    }
}*/

export default connect(mapStateToProps, {
    toggleFollow, setUsers, setCurrentPage, setTotalUserCount, toggleIsFetching
})(UsersContainer);