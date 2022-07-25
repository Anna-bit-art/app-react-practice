import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Nav";
import MessagesContainer from "./components/Messages/MessagesContainer";
import Setting from "./components/Setting/Setting";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/Login.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/:userId' element={<ProfileContainer />}/>
                        <Route path='/profile/*' element={<ProfileContainer />}/>
                        <Route path='/messages' element={<MessagesContainer />}/>
                        <Route path='/news' element={<News />}/>
                        <Route path='/setting' element={<Setting />}/>
                        <Route path='/users' element={<UsersContainer />}/>
                        <Route path='/login' element={<Login />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
