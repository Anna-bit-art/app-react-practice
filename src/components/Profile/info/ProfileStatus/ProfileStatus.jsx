import React, {useEffect, useState} from "react";
import s from "./ProfileStatus.module.css";


const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => { setEditMode(true) }
    const deactivateEditMode = () => { setEditMode(false); props.updateStatus(status) }
    const onStatusChange = (e) => { setStatus(e.currentTarget.value) }

    return (
        <>
            { ! editMode &&
            <div>
                <h5 className={s.profileStatus} onDoubleClick={activateEditMode}> {props.status || 'No status'} </h5>
            </div>
            }

            { editMode &&
            <div>
                <input className={s.profileStatusInput} type='text' autoFocus={true} onBlur={deactivateEditMode}
                       onChange={onStatusChange} value={status}/>
            </div>
            }
        </>
    )
}

export default ProfileStatus;


