import {connect} from "react-redux";
import {deleteUser, followUsers, getUsers, toggleInProgress}
from "../../redux/usersReducer";
import React from "react";
import UsersFunctional from "./UsersFunctional";
import Preloader from "../common/preloader/preloader";
import {compose} from "redux";


class UsersClass extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
        // this.props.toggleIsFetching(true);
        // UsersApi.getUsers(this.props.pageSize, this.props.currentPage)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //         // this.props.setTotalUsersCount(response.data.totalCount);-
        //     })
    }
    onPageChange = (pageNumber) => {
        this.props.getUsers(this.props.pageSize, pageNumber);
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
                             followUsers={this.props.followUsers}/>
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, {toggleInProgress, getUsers, deleteUser, followUsers})
)
(UsersClass);


// const UsersContainer = withAuthRedirect (
//     connect(mapStateToProps, {toggleInProgress, getUsers, deleteUser, followUsers}) (UsersClass)
// );

// export default UsersContainer;














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
