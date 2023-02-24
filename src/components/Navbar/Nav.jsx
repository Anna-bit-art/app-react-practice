import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {connect} from "react-redux";

const Navbar = (props) => {

    let [activeLink, setActiveLink] = useState(props.categories.find(e => e !== undefined).name);

    return <nav className={s.nav}>

        {props.categories.map(el =>
            <li key={el.id}>
                <NavLink to={el.name} className={activeLink === el.name ? s.active : null}
                         onClick={() => {setActiveLink(el.name)}}>
                    {el.name}</NavLink>
            </li>
        )}
    </nav>

}

const mapStateToProps = (state) => ({
    categories: state.app.categories
})

export default connect(mapStateToProps, null)(Navbar);
