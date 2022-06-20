import React from 'react';
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import cat from "../../img/cat.png";


type PropsType = {
    id: number,
    photos: { small: null | string, large: null | string }
    followed: boolean,
    folliwingProgress: number[]
    followTC: (userID: number) => void
    unFollowTC: (userID: number) => void
    name: string
    status: string | null
}

const User: React.FC<PropsType> = ({id, status, photos, followed, name, folliwingProgress, followTC, unFollowTC}) => {

    let styleImgAndNameBlock = {
        display: "flex",
        justifyContent: 'space-between',
        color: "gold", backgroundColor: 'blue',
        borderRadius: '12px', padding: '5px'

    } as const

    return (
        <div>
            <div key={id} style={{display: "flex", justifyContent: 'space-between', flexWrap: 'wrap'}}>
                <div className={s.styleUser}>
                    <div>

                        <div style={styleImgAndNameBlock}>
                            <NavLink to={'/profile/' + id}>
                                <img style={{
                                    width: '60px',
                                    height: '60px',
                                    margin: '10px',
                                    borderRadius: '15px'
                                }} src={photos.small || cat}/>
                            </NavLink>
                            <div style={{fontFamily: 'fantasy', color: 'pink', fontSize: '30px'}}>{name}</div>
                        </div>


                    </div>


                    {followed ?

                        <button disabled={folliwingProgress.some(id => id == id)} style={{margin: '10px'}}
                                onClick={() => {
                                    followTC(id)
                                }}>unFollow</button>

                        : <button disabled={folliwingProgress.some(id => id == id)} style={{margin: '10px'}}
                                  onClick={() => {
                                      unFollowTC(id)
                                  }}>follow</button>
                    }


                </div>

                <div className={s.statusUser}>
                    {status ? <div className={s.styleStatus}>{status}</div>
                        : <div className={s.styleStatus}> place for status </div>}
                </div>

            </div>
        </div>
    );
};

export default User;