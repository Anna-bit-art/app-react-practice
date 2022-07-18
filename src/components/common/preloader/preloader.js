import preLoader from "../../../img/spinner.svg";
import React from "react";
import s from "./preloader.css";

let Preloader = (props) => {
    return <div className={s.preloader}>
        <img alt='preloader' src={preLoader}/>
            </div>

}

export default Preloader;