import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfileDatatTC, setUserProfile} from "../../redux/profile-reducer";
import {ProfileType} from "../../redux/store";
import {withRouter} from "../HOC/withRouter";
import {GlobalStateType} from "../../redux/redux-store";
import WithAuthRedirect from "../HOC/withAuthRedirect";
import {compose} from "redux";


type MapStateToPropsType = {
    profile: ProfileType | null,
}

type MapDispatchToPropsType = {
    getUserProfileDatatTC: (userID: number) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & { router: any }

class ProfileContainer extends React.Component<PropsType> {


    componentDidMount(): void {
        let userID = this.props.router.params.userID

        if (!userID) {
            userID = 2
        }

        this.props.getUserProfileDatatTC(userID)

    }

    render() {

        return <>
            <Profile {...this.props} />
        </>
    }
}




const mapStateToProps = (state: GlobalStateType) => {
    return {
        profile: state.profilePage.profile
    }

}
// @ts-ignore
let ProfileContainers: React.FC = compose(
    connect(mapStateToProps, {setUserProfile, getUserProfileDatatTC}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)

export default ProfileContainers

