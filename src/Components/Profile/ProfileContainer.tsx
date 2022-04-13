import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {ProfileType, StateType} from "../../redux/store";
import {useParams,} from "react-router-dom";
import {withRouter} from "../HOC/withRouter";

type MapStateToPropsType = {
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: null | ProfileType) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & { router: any }

class ProfileContainer extends React.Component<PropsType> {


    componentDidMount(): void {
        let userID = this.props.router.params.userID
        if (!userID) {
            userID = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        debugger
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
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)



