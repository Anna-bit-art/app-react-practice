import s from './Info.module.css';
import Preloader from "../../common/preloader/preloader";
import userPhoto from "../../../img/catAvatar2.jpeg";
import React from "react";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const Info = (props) => {

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    if (!props.profile) {return <Preloader />}

    return (
        <div className={s.info}>
            <div className={s.photo}>
                <img alt='img' src={ props.profile.photos.large ? props.profile.photos.large : userPhoto } />
                { props.isOwner &&
                    <>
                        <input type={'file'} onChange={onMainPhotoSelected} id='select' hidden />
                        <label htmlFor='select'>Change photo</label>
                    </>
                }

            </div>

            <div className={s.photoInfo}>
                <h3>{props.profile.fullName}</h3>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} />

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
                            <li>github:</li>
                            <li>facebook:</li>
                        </ul>
                    </div>

                    <div className={s.contactAnswer}>
                        <ul>
                            <li><a href='#'>{props.profile.contacts.github}</a></li>
                            <li><a href='#'>{props.profile.contacts.facebook}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;
