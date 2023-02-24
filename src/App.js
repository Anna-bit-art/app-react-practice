import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Nav";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/login/Login.jsx";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/preloader/preloader";
import NewsContainer from "./components/News/NewsContainer";

const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));



class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <React.Suspense fallback={<Preloader/>}>
                    <Routes>
                        <Route path="/" element={<ProfileContainer/>} />
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        <Route path='/profile' element={<ProfileContainer/>}/>
                        <Route path='/messages' element={<MessagesContainer/>}/>
                        <Route path='/news' element={<NewsContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                    </React.Suspense>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
