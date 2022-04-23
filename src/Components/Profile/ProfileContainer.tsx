import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfileDatatTC, setUserProfile} from "../../redux/profile-reducer";
import {ProfileType, StateType} from "../../redux/store";
import {useParams,} from "react-router-dom";
import {withRouter} from "../HOC/withRouter";
import {GlobalStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    profile: ProfileType | null,
    isAuth: boolean
}

type MapDispatchToPropsType = {
   getUserProfileDatatTC: (userID: number) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & { router: any }

class ProfileContainer extends React.Component<PropsType> {


    componentDidMount(): void {
        let userID = this.props.router.params.userID

        if (!userID) {userID = 2}

        this.props.getUserProfileDatatTC(userID)

    }

    render() {

        return <>
            <Profile {...this.props} />
        </>
    }
}

const mapStateToProps = (state: GlobalStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth

    }

}


const WithUrlDataContainerComponent = withRouter<PropsType>(ProfileContainer);

// @ts-ignore
export default connect(mapStateToProps, {setUserProfile, getUserProfileDatatTC})(WithUrlDataContainerComponent)



