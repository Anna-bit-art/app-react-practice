import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";

class HeaderClass extends React.Component {
    render = () => {
        return <>
            <Header {...this.props} />
        </>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const HeaderContainer = connect(mapStateToProps, {logout}) (HeaderClass);
export default HeaderContainer;
