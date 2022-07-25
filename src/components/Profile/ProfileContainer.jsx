import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileStatus, profileUser, updateStatus} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";

class  ProfileClass extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId){
            userId = 24282;
        }
        this.props.profileUser(userId);
        this.props.profileStatus(userId);
    }
    render () {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect (mapStateToProps, {profileUser, profileStatus, updateStatus}),
    withAuthRedirect,
    withRouter
)(ProfileClass);


