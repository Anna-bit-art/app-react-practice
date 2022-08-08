import s from './Users.module.css';
import React from "react";
import userPhoto from "../../img/catAvatar2.jpeg";
import {NavLink} from "react-router-dom";


let User = (props) => {
    let user = props.user
    return (

        <div className={s.user}>

            <div className={s.userPhoto}>
                <NavLink to={'/profile/' + user.id}>
                    <img alt='profilePhoto' src={user.photos.small != null ? user.photos.small : userPhoto}/>
                </NavLink>
            </div>

            <div className={s.userInfo}>
                <h4 className={s.userFullName}>{user.name}</h4>
                <h5 className={s.userStatus}>{user.status != null ? user.status : 'No status'}</h5>
            </div>

            <div className={s.userFollow}>
                {user.followed
                    ? <button disabled={props.followingInProgress.some(userId => userId === user.id)}
                              onClick={() => {
                                  props.deleteUser(user.id)
                              }}>Unfollow</button>

                    : <button disabled={props.followingInProgress.some(userId => userId === user.id)}
                              onClick={() => {
                                  props.followUser(user.id)
                              }}>Follow</button>
                }
            </div>

        </div>
    )
}

export default User;
