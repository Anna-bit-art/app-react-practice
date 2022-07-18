import s from './Post.module.css';
import noAvatar from "../../../../img/catAvatarLittle.jpeg";
import React from "react";


const Post = (props) => {
    return (
        <div className={s.posts}>
            {/*{ <img alt='img' src={ props.profile.photos.small != null ? props.profile.photos.small: noAvatar } /> }*/}
            <img className={s.imgPost } alt='avatar' src={noAvatar}/>
            <h3 className={s.item}>{props.text}</h3>
        </div>
    )
}

export default Post;