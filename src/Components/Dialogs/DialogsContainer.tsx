import React from 'react'
import {addNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {GlobalStateType} from "../../redux/redux-store";
import WithAuthRedirect from "../HOC/withAuthRedirect";
import {withRouter} from "../HOC/withRouter";
import {compose} from "redux";



let mapStateToProps = (state: GlobalStateType) =>{
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: any) =>{
    return {
        onClickHandler: (dialogID: string, text: string)=>{
                dispatch(addNewMessageActionCreator(dialogID, text))
             },
        }
    }

    // @ts-ignore
const DialogsContainer: React.FC = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    WithAuthRedirect,
)(Dialogs)

export default DialogsContainer