import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <>
    <header className={s.header}>
        <div className={s.headerBorder}>
            <span className={s.color1}></span>
            <span className={s.color2}></span>
            <span className={s.color3}></span>
        </div>
        <div className={s.loginBlock}>
            { props.isAuth
                ? <NavLink to={'/profile'} onClick={props.logout}>Logout</NavLink>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
    </>
}

export default Header;