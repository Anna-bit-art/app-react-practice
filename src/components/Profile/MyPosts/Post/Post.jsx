import s from './Post.module.css';
import noAvatar from "../../../../img/catAvatarLittle.jpeg";
import React from "react";


const Post = (props) => {

    if (!props.profile) {return null}

    return (
        <div className={s.posts}>
            <img className={s.imgPost} alt='avatar' src={ props.profile.photos.small ? props.profile.photos.small : noAvatar }/>
            <h3 className={s.item}>{props.text}</h3>
        </div>
    )
}

export default Post;
