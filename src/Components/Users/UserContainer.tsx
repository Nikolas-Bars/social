import React from 'react';
import {connect} from "react-redux";
import preloader from '../../img/Walk.gif'

import {ActionTypes, StateType, UsersType} from "../../redux/store";
import {
    followTC,
    getUsersTC,
    setCurrentPage,
    toggleFollow,
    toggleFollowingProgress, unFollowTC,

} from "../../redux/userReducer";
import Preloader from "../Preloader/Preloader";
import Users from "./Users";
import WithAuthRedirect from "../HOC/withAuthRedirect";

type PropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    toggleFollow: (id: number) => void
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    isFetching: boolean
    folliwingProgress: number[]
    getUsersTC: (currentPage: number, pageSize: number) => void,
    followTC: (userID: number)=> void
    unFollowTC: (userID: number)=> void
}

class UsersContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize) // currentPage  - текущая страница
    }

    onClick = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }

    render(): React.ReactNode {


        return <div>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                toggleFollow={this.props.toggleFollow}
                onClick={this.onClick}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                folliwingProgress={this.props.folliwingProgress}
                followTC={this.props.followTC}
                unFollowTC={this.props.unFollowTC}
            />

        </div>;
    }
}


let AuthRedirectComponent = WithAuthRedirect(UsersContainer)


let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.count,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        folliwingProgress: state.usersPage.folliwingProgress,
    }
}

export default connect(mapStateToProps, {
    toggleFollow,
    setCurrentPage,
    getUsersTC,
    followTC,
    unFollowTC,
})(AuthRedirectComponent);