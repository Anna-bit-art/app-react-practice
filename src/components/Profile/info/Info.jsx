import s from './Info.module.css';
import Preloader from "../../common/preloader/preloader";
import userPhoto from "../../../img/catAvatar2.jpeg";
import React, {useState} from "react";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileDataForm from "../ProfileDataForm";

const Info = ({profile, savePhoto, isOwner, status, updateStatus}) => {

    let [editMode, setEditMode] = useState(false)

    const handleSubmit = (formData) => {
        console.log(formData);
        setEditMode(false);
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={s.info}>
            <div className={s.photo}>
                <img alt='img' src={profile.photos.large ? profile.photos.large : userPhoto}/>
                {isOwner &&
                <>
                    <input type={'file'} onChange={onMainPhotoSelected} id='select' hidden/>
                    <label htmlFor='select'>Choose file</label>
                </>
                }

            </div>

            <div className={s.photoInfo}>

                { !editMode
                    ? <>
                        <h3>{profile.fullName}</h3>
                        <ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner}/>
                        <ProfileData profile={profile} isOwner={isOwner} goToEditMode={()=>setEditMode(true)}/>
                    </>


                    : <ProfileDataForm profile={profile} handleSubmit={handleSubmit}/>
                }

            </div>

        </div>
    )
}

export default Info;


const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={s.user}>
        { isOwner &&  <button onClick={goToEditMode}>Edit</button> }

        <h5>About me</h5>

        <div><span>Looking for a job:</span> {(profile.lookingForAJob) ? 'yes' : ''}</div>
        <div><span>My skills:</span> {profile.lookingForAJobDescription}</div>
        <div><span>About me:</span> {profile.aboutMe}</div>

        <h5>My contacts</h5>
        <div className={s.contacts}>
            {Object.keys(profile.contacts).map(key =>
                <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            )}
        </div>
    </div>

}


const Contact = ({contactTitle, contactValue}) => {
    return <div><span>{contactTitle}:</span> {contactValue}</div>
}
