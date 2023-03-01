import React from "react";
import {Field, Form} from "react-final-form";
import s from "./ProfileDataForm.module.css";


const required = value => (value ? undefined : 'Required');



const ProfileDataForm = ({profile, handleSubmit, profileErrors}) => {
    const onSubmit = (formData) => {
       handleSubmit(formData);
    }

    return <>
        <Form
            onSubmit={onSubmit}
            initialValues={{
                lookingForAJob: profile.lookingForAJob, fullName: profile.fullName,
                lookingForAJobDescription: profile.lookingForAJobDescription,
                aboutMe: profile.aboutMe,
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
                            <Field name="lookingForAJob" component="input" type="checkbox" />
                        </div>

                        <Field name='lookingForAJobDescription' validate={required}>
                            {({input, meta}) => (
                                <div>
                                    <label>My skills:</label>
                                    <textarea {...input} />
                                    {(meta.error || meta.submitError) && meta.touched &&
                                    (<span>{meta.error || meta.submitError}</span>)}
                                </div>
                            )}
                        </Field>

                        <Field name='aboutMe' validate={required}>
                            {({input, meta}) => (
                                <div>
                                    <label>About me:</label>
                                    <textarea {...input} />
                                    {(meta.error || meta.submitError) && meta.touched &&
                                    (<span>{meta.error || meta.submitError}</span>)}
                                </div>
                            )}
                        </Field>

                        {Object.keys(profile.contacts).map(key =>
                            <div key={key}>
                                <label>{key}</label>
                                <Field name={`contacts.${key}`} component="input" initialValue={profile.contacts[key]}/>
                            </div>
                        )}

                        {profileErrors &&
                            <div className={s.error}>{errorArray(profileErrors)}</div>
                        }

                    </form>
                </>
            )}
        />
    </>

}

export default ProfileDataForm;



let errorArray = (errors) => {
    let modified = [];
    errors.map(item => {
            item = item.split('>')[1].split(')')[0].toLowerCase();
            modified.push(item);
        }
    )
    if (modified.length === 0) return null;
    if (modified.length !== 0) return `Invalid URL format: ${modified.toString()}`;
}
