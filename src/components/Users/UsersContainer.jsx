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
    getPageSize,
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
            <UsersFunctional totalUsersCount={this.props.totalUsersCount}
                             pageSize={this.props.pageSize}
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
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {toggleInProgress, requestUsers, deleteUser, followUser})
)
(UsersClass);

 











// const UsersContainer = withAuthRedirect (
//     connect(mapStateToProps, {toggleInProgress, requestUsers, deleteUser, followUser}) (UsersClass)
// );

// let mapDispatchToProps = (dispatch) => {
//     return {
//         following: (userId) => {dispatch(followingAC(userId))},
//         remove: (userId) => {dispatch(removeAC(userId))},
//         setUsers: (users) => {dispatch(setUsersAC(users))},
//         setCurrentPage: (pageNumber) => {dispatch(setCurrentPageAC(pageNumber))},
//         setTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCountAC(totalCount))},
//         toggleIsFetching: (isFetching) => {dispatch(toggleIsFetchingAC(isFetching))}
//     }
// }
// let AuthRedirectComponent = withAuthRedirect(UsersClass);
