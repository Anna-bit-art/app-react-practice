import s from './../Messages.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/message/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;