import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileStatus, profileUser, updateStatus} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";

class ProfileClass extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.profileUser(userId);
        this.props.profileStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} id={this.props.id} profile={this.props.profile}
                         status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id
    }
}

export default compose(
    connect(mapStateToProps, {profileUser, profileStatus, updateStatus}),
    withAuthRedirect,
    withRouter
)(ProfileClass);


