import Rica from "../img/Rica.jpg";
import React from "react";


const Profile =()=>{
    return(
        <div className={"content"}>
            <div className={'img-content'}>
                <img src={Rica} />
            </div>
            <div>Ava + discription</div>
            <div>
                My Posts
                <div>
                    New Post
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>

        </div>
    )
}

export default Profile