import {connect} from "react-redux";
import {deleteUser, followUser, requestUsers, toggleInProgress}
from "../../redux/usersReducer";
import React from "react";
import UsersFunctional from "./UsersFunctional";
import Preloader from "../common/preloader/preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getPortionSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";


class UsersClass extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.pageSize, this.props.currentPage);
    }
    onPageChange = (pageNumber) => {
        this.props.requestUsers(this.props.pageSize, pageNumber);
    }
    render = () => {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <UsersFunctional totalItemsCount={this.props.totalItemsCount}
                             pageSize={this.props.pageSize}
                             portionSize={this.props.portionSize}
                             currentPage={this.props.currentPage}
                             onPageChange={this.onPageChange}
                             users={this.props.users}
                             followingInProgress={this.props.followingInProgress}
                             deleteUser={this.props.deleteUser}
                             followUser={this.props.followUser}

            />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        portionSize: getPortionSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {toggleInProgress, requestUsers, deleteUser, followUser})
)
(UsersClass);

