import { Form, Field } from 'react-final-form';
import s from "./Login.module.css";
import {connect} from "react-redux";
import {compose} from "redux";
import {login} from "../../redux/authReducer";
import {FORM_ERROR} from "final-form";


const LoginForm = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
        props.login(formData)
    }
    return (
        <>
            <h3 className={s.login}>Login</h3>

            <Form
                onSubmit={onSubmit}

            >
                {({handleSubmit, pristine, reset, submitting}) => (
                    <div>
                        <form onSubmit={handleSubmit} className={s.loginPage}>
                            <div>
                                <label>Email</label>
                                <Field name='email' component='input' placeholder='email' type='email'/>
                            </div>
                            <div>
                                <label>Password</label>
                                <Field name='password' component='input' placeholder='Password' type='password'/>
                            </div>
                            <div className={s.checkBoxDiv}>
                                <Field name='rememberMe' component='input' type='checkbox'/>
                                <label className={s.rememberMe}>Remember me</label>
                            </div>
                            <div>
                                <button className={s.buttonLogin}>Login</button>
                            </div>
                        </form>
                    </div>
                )
                }
            </Form>
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        rememberMe: state.auth.rememberMe,
        captcha: state.auth.captcha
    }
}

export default compose (
    connect(mapStateToProps, {login})
) (LoginForm)


// export default Login;