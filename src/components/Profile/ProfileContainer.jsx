import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileStatus, profileUser, savePhoto, updateStatus} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";

class ProfileClass extends React.Component {

    refreshProfile () {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.profileUser(userId);
        this.props.profileStatus(userId);
    }

    componentDidMount() {
       this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         id={this.props.id}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto}
                         isOwner={!this.props.router.params.userId} />
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
    connect(mapStateToProps, {profileUser, profileStatus, updateStatus, savePhoto}),
    withAuthRedirect,
    withRouter
)(ProfileClass);


