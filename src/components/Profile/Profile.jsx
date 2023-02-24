import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Info from "./info/Info";
import React from "react";

const  Profile = (props) => {
    return (
        <div>
            <Info profile={props.profile} status={props.status}
                  updateStatus={props.updateStatus}
                  isOwner={props.isOwner}
                  savePhoto={props.savePhoto}
            />
            <MyPostsContainer profile={props.profile} isOwner={props.isOwner} />
        </div>
    )
}

export default Profile;
