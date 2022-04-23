import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {profileDatatTC, setUserProfile} from "../../redux/profile-reducer";
import {ProfileType, StateType} from "../../redux/store";
import {useParams,} from "react-router-dom";
import {withRouter} from "../HOC/withRouter";

type MapStateToPropsType = {
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: null | ProfileType) => void
    profileDatatTC: (userID: number) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & { router: any }

class ProfileContainer extends React.Component<PropsType> {


    componentDidMount(): void {
        let userID = this.props.router.params.userID

        if (!userID) {userID = 2}

        this.props.profileDatatTC(userID)

    }

    render() {

        return <>
            <Profile {...this.props} />
        </>
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }

}


const WithUrlDataContainerComponent = withRouter<PropsType>(ProfileContainer);

// @ts-ignore
export default connect(mapStateToProps, {setUserProfile, profileDatatTC})(WithUrlDataContainerComponent)



