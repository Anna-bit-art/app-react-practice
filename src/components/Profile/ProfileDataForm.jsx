import React from "react";
import {Field, Form} from "react-final-form";
import s from "./ProfileDataForm.module.css";


const required = value => (value ? undefined : 'Required')


const ProfileDataForm = ({profile, handleSubmit}) => {
    const onSubmit = (formData) => {
        handleSubmit(formData);
    }
    return <>

        <Form
            onSubmit={onSubmit}
            initialValues={{
                lookingForAJob: false, fullName: profile.fullName,
                lookingForAJobDescription: profile.lookingForAJobDescription,
                aboutMe: profile.aboutMe
            }}
            render={({handleSubmit}) => (
                <>
                    <form onSubmit={handleSubmit} className={s.profileForm}>

                        <button type='submit'>Save</button>

                        <div className={s.name}>
                            <Field name='fullName' validate={required}>
                                {({input, meta}) => (
                                    <div>
                                        <label>Full name</label>
                                        <input {...input} type='name'/>
                                        {(meta.error || meta.submitError) && meta.touched &&
                                        (<span>{meta.error || meta.submitError}</span>)}
                                    </div>
                                )}
                            </Field>
                        </div>


                        <div>
                            <label>Looking for a job:</label>
                            <Field name="lookingForAJob" component="input" type="checkbox"/>
                        </div>

                        <div>
                            <label>My skills:</label>
                            <Field name="lookingForAJobDescription" component="textarea"/>
                        </div>

                        <div>
                            <label>About me:</label>
                            <Field name="aboutMe" component="textarea"/>
                        </div>

                            {Object.keys(profile.contacts).map(key =>
                                <div>
                                    <label>{key}</label>
                                    <Field name={key} component="input" initialValue={profile.contacts[key]}/>
                                </div>
                            )}

                    </form>
                </>
            )}
        />
    </>

}

export default ProfileDataForm;

