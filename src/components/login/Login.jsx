import { Form, Field } from 'react-final-form';
import s from "./Login.module.css";
import {connect} from "react-redux";
import {compose} from "redux";
import {login} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";


const required = value => (value ? undefined : 'Required')



const LoginForm = (props) => {
    const onSubmit = (e) => {
        props.login(e.email, e.password, e.rememberMe)
    }

    if(props.isAuth) return <Navigate to={"/profile"} />

    return <>
            <h3 className={s.login}>Login</h3>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit}) => (
                    <>
                        <form onSubmit={handleSubmit} className={s.loginForm}>

                            <Field name='email' validate={required} >
                                {({input, meta})=> (
                                    <div>
                                        <label>Email</label>
                                        <input {...input} type='email'/>
                                        {(meta.error || meta.submitError) && meta.touched &&
                                        (<span>{meta.error || meta.submitError}</span>)}
                                    </div>
                                )}
                            </Field>

                            <Field name='password' validate={required} >
                                {({input, meta})=> (
                                    <div>
                                        <label>Password</label>
                                        <input {...input} type='password'/>
                                        {(meta.error || meta.submitError) && meta.touched &&
                                        (<span>{meta.error || meta.submitError}</span>)}
                                    </div>
                                )}
                            </Field>

                            <Field name='checkbox' type='checkbox'>
                                {({input})=> (
                                    <div className={s.checkbox}>
                                        <input {...input} type='checkbox'/>
                                        <label>Remember me</label>
                                    </div>
                                )}
                            </Field>

                            { props.errorMessage && <div className={s.error}>{props.errorMessage}</div> }

                            <button type='submit'>Login</button>
                        </form>
                    </>
                    )
                }
            />
        </>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        errorMessage: state.auth.errorMessage
    }

}

export default compose (
    connect(mapStateToProps, {login})
) (LoginForm)


