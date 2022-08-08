import React from "react";
import Paginator from "../common/Paginator/Pagenaitor";
import User from "./User";


let UsersFunctional = (props) => {
    return <>
        <Paginator currentPage={props.currentPage} onPageChange={props.onPageChange}
                   totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>


        {props.users.map(u => <User user={u} key={u.id}
                                    followingInProgress={props.followingInProgress}
                                    deleteUser={props.deleteUser}
                                    followUser={props.followUser}/>)}
    </>
}

export default UsersFunctional;

