import {Form, Field} from 'react-final-form';
import s from "./Login.module.css";
import {connect} from "react-redux";
import {compose} from "redux";
import {login} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import React from "react";

const required = value => (value ? undefined : 'Required')

const LoginForm = ({ isAuth, errorMessage, captchaUrl, login }) => {

    const onSubmit = (formdata) => {
        console.log(formdata);
        login(formdata.email, formdata.password,
            formdata.rememberMe, formdata.captcha);
    }

    if (isAuth) return <Navigate to={"/profile"}/>

    return <>
        <h3 className={s.login}>Login</h3>
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit}) => (
                <>
                    <form onSubmit={handleSubmit} className={s.loginForm}>

                        <Field name='email' validate={required}>
                            {({input, meta}) => (
                                <div>
                                    <label>Email</label>
                                    <input {...input} type='email'/>
                                    {(meta.error || meta.submitError) && meta.touched &&
                                    (<span>{meta.error || meta.submitError}</span>)}
                                </div>
                            )}
                        </Field>

                        <Field name='password' validate={required}>
                            {({input, meta}) => (
                                <div>
                                    <label>Password</label>
                                    <input {...input} type='password'/>
                                    {(meta.error || meta.submitError) && meta.touched &&
                                    (<span>{meta.error || meta.submitError}</span>)}
                                </div>
                            )}
                        </Field>

                        <Field name='rememberMe' type='checkbox' initialValue={false}>
                            {({input}) => (
                                <div className={s.checkbox}>
                                    <input {...input} type='checkbox'/>
                                    <label>Remember me</label>
                                </div>
                            )}
                        </Field>

                        {captchaUrl &&
                            <div className={s.captcha}>
                                <img src={captchaUrl} alt={'captcha'}/>
                                <Field name='captcha' component="input" validate={required}/>
                            </div>

                        }

                        {errorMessage && <div className={s.error}>{errorMessage}</div>}

                        <button type='submit'>Login</button>
                    </form>
                    <div className={s.enter}>
                        <p><span>email:</span> ann.shalnova@gmail.com</p>
                        <p><span>password:</span> 12345678</p>
                    </div>
                </>
            )
            }
        />
    </>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        errorMessage: state.auth.errorMessage,
        captchaUrl: state.auth.captchaUrl
    }

}

export default compose(
    connect(mapStateToProps, {login})
)(LoginForm)


