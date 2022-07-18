import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Info from "./info/Info";
import React from "react";

const  Profile = (props) => {
    return (

        <div>
            <Info profile={props.profile}  status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer profile={props.profile} />
        </div>
    )
}

export default Profile;