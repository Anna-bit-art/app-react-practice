import s from './Info.module.css';
import Preloader from "../../common/preloader/preloader";
import userPhoto from "../../../img/catAvatar2.jpeg";
import React from "react";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const Info = (props) => {

    if (!props.profile) {return <Preloader />}

    return (
        <div className={s.info}>
            <div className={s.photo}> {
                <img alt='img' src={ props.profile.photos.large != null ? props.profile.photos.large: userPhoto } />
            }
            </div>
            <div className={s.photoInfo}>
                <h3>{props.profile.fullName}</h3>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />

                <h5 className={s.me}>About me</h5>
                <div className={s.user}>
                    <div className={s.userQuestion}>
                        <ul>
                            <li>Looking for a job:</li>
                            <li>Skills:</li>
                            <li>About me:</li>
                        </ul>
                    </div>

                    <div className={s.userAnswer}>
                        <ul>
                            <li>{(props.profile.lookingForAJob) ? 'yes' : ''}</li>
                            <li>{props.profile.lookingForAJobDescription}</li>
                            <li>{props.profile.aboutMe}</li>
                        </ul>
                    </div>
                </div>

                <h5 className={s.me}>My contacts</h5>
                <div className={s.contacts}>
                    <div className={s.contactQuestion}>
                        <ul>
                            <li>facebook:</li>
                            <li>instagram:</li>
                            <li>twitter:</li>
                        </ul>
                    </div>

                    <div className={s.contactAnswer}>
                        <ul>
                            <li><a href='#'>{props.profile.contacts.facebook}</a></li>
                            <li><a href='#'>{props.profile.contacts.instagram}</a></li>
                            <li><a href='#'>{props.profile.contacts.twitter}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;
