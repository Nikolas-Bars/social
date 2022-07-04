import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ProfileType} from "../../../redux/store";
import {updateProfileTC} from "../../../redux/profile-reducer";
import {useFormik} from "formik";
import validate = WebAssembly.validate;
import {GlobalStateType} from "../../../redux/redux-store";

export type UpdateProfilePropsType = {
    profile: ProfileType
    editMode: (value: boolean) => void
}

export const UpdateForm = (props: UpdateProfilePropsType) => {

    const dispatch = useDispatch()

    const errorUpdate = useSelector<GlobalStateType, string | null>(state => state.profilePage.errorUpdateUserData)

    const formik = useFormik({
        validate: (values) => {
            if (!values.facebook.includes('.com') && values.facebook != '') {
                return {
                    facebook: 'Неверный формат!'
                }
            }
            if (!values.github.includes('.com') && values.github != '') {
                return {
                    github: 'Неверный формат!'
                }
            }
        },
        initialValues: {
            facebook: props.profile.contacts.facebook,
            website: props.profile.contacts.website,
            vk: props.profile.contacts.vk,
            twitter: props.profile.contacts.twitter,
            instagram: props.profile.contacts.instagram,
            youtube: props.profile.contacts.youtube,
            github: props.profile.contacts.github,
            mainLink: props.profile.contacts.mainLink
        },
        onSubmit(values) {
            dispatch(updateProfileTC({...props.profile, contacts: values}))
            props.editMode(false)
        },

    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div style={{display: 'flex', flexDirection: 'column', width: '300px'}}>
                <b>facebook: </b><input
                {...formik.getFieldProps("facebook")}
                onChange={formik.handleChange}
                value={formik.values.facebook}
            />
                {formik.errors.facebook ? <div>{formik.errors.facebook}</div> : null}
                <b>github: </b><input
                {...formik.getFieldProps("github")}
                onChange={formik.handleChange}
                value={formik.values.github}
            />
                {formik.errors.github ? <div>{formik.errors.github}</div> : null}
                <b>instagram: </b><input
                {...formik.getFieldProps("instagram")}
                onChange={formik.handleChange}
                value={formik.values.instagram}
            />
                <b>mainLink: </b><input
                {...formik.getFieldProps("mainLink")}
                onChange={formik.handleChange}
                value={formik.values.mainLink}
            />
                <b>website: </b><input
                {...formik.getFieldProps("website")}
                onChange={formik.handleChange}
                value={formik.values.website}
            />
                <b>twitter: </b><input
                {...formik.getFieldProps("twitter")}
                onChange={formik.handleChange}
                value={formik.values.twitter}
            />
                <b>vk: </b><input
                {...formik.getFieldProps("vk")}
                onChange={formik.handleChange}
                value={formik.values.vk}
            />
                <b>youtube: </b><input
                {...formik.getFieldProps("youtube")}
                onChange={formik.handleChange}
                value={formik.values.youtube}
            />
                <button type="submit">Submit</button>
            </div>
        </form>
    )


}