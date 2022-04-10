import React from 'react';
import {UsersType} from "../../redux/store";
import cat from '../../img/cat.png'


type PropsType = {
    users: Array<UsersType>
    toggleFollow: (id: number) => void
    onClick: (count: number) => void
    currentPage: number
    pageSize: number
    totalUsersCount: number
}

const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount/ props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {

        pages.push(i)
    }



    let styleUserBlock = {
        display: 'flex', justifyContent: "space-around", flexDirection: "column", flexWrap: 'wrap'
    } as const

    let styleUser = {
        overflow: "hidden",
        backgroundColor: 'aquamarine',
        display: "flex",
        flexDirection: "column",
        border: '1px solid red',
        margin: '20px', padding: '20px',
        borderRadius: '12px',
        width: '350px',

    } as const


    return (
        <>
            {pages.map(el => <button key={el} onClick={() => {
            props.onClick(el)
        }} style={props.currentPage === el ? {color: "gold", backgroundColor: 'blue'} : {color: "white", backgroundColor: 'black'}}>{el}</button>)}
            <div style={styleUserBlock}>

                {props.users.map(el => {
                    return (

                        <div key={el.id} style={styleUser}>

                            <div style={{display: "flex", justifyContent: "space-between", color: "gold", backgroundColor: 'blue', borderRadius: '12px', padding: '5px'}}>

                                <div style={{display: "flex"}}><img style={{width: '40px', height: '40px', margin: '10px'}} src={el.photos.small || cat}/>

                                {el.name}
                            </div>


                                {el.status ?  <div style={{ display: "flex",  color: "blue", backgroundColor: 'gold', margin: '20px', borderRadius: '12px',  padding: '10px'}}>
                                {el.status}

                            </div> : <div style={{ display: "flex",  color: "blue", backgroundColor: 'gold', margin: '20px', borderRadius: '12px',  padding: '10px'}}>
                                    place for status
                                </div> }
                        </div>
                            {el.followed ? <button style={{margin: '10px'}} onClick={() => {
                                    props.toggleFollow(el.id)
                                }}>follow</button> :
                                <button style={{margin: '10px'}} onClick={() => {
                                    props.toggleFollow(el.id)
                                }}>unFollow</button>}
                        </div>

                    )
                })}
            </div>
        </>
    );
};

export default Users;
