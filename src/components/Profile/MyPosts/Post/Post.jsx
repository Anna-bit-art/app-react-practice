import s from './Post.module.css';
import noAvatar from "../../../../img/catAvatarLittle.jpeg";
import React from "react";


const Post = (props) => {

    if (!props.profile) {return null}

    return (
        <div className={s.post}>
            <img alt='avatar' src={ props.profile.photos.small ? props.profile.photos.small : noAvatar }/>
            <p>{props.text}</p>
        </div>
    )
}

export default Post;
