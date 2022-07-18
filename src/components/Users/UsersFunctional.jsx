import s from './Users.module.css';
import React from "react";
import userPhoto from "../../img/catAvatar2.jpeg";
import {NavLink} from "react-router-dom";


let UsersFunctional = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            { pages.map( p => {
                return <span className={ (props.currentPage === p && s.selectedPage) || (props.currentPage !== p && s.unselectedPage) }
                             onClick={ () => {props.onPageChange(p)} } >{p}  </span>
            } ) }
        </div>
        {
            props.users.map( u => <div key={u.id}>
                <div className={s.user}>
                    <div className={s.userPhoto}>
                        <NavLink to={'/profile/' + u.id}>
                            <img alt='photo' src={ u.photos.small != null ? u.photos.small : userPhoto }/>
                        </NavLink>
                    </div>
                    <div className={s.userInfo}>
                        <h4 className={s.userFullName}>{u.name}</h4>
                        <h5 className={s.userStatus}>{u.status != null ? u.status : 'No status'}</h5>
                        <h5 className={s.userLocation}>{'u.location.city'}, {'u.location.country'}</h5>
                    </div>
                    <div className={s.userFollow}>

                        {u.followed
                            ? <button disabled={props.followingInProgress.some(userId=> userId === u.id)}
                                onClick={() => { props.deleteUser(u.id)} }>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(userId=> userId === u.id)}
                                onClick={() => {props.followUsers(u.id)}}>Follow</button>
                        }
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default UsersFunctional;