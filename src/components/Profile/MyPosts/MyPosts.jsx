import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {Field, Form} from 'react-final-form';


function MyPosts(props) {
    return (
        <>
            {props.isOwner &&
            <div>
                <h1>My posts</h1>
                <div className={s.field}>
                    <MyPostForm addPost={props.addPost}/>
                </div>

                <div className={s.posts}>
                        {props.posts.map(p => (
                            <Post id={p.id} like={p.likesCount} key={p.id} text={p.text} profile={props.profile} />
                        ))}
                </div>
            </div>
            }
        </>

    )
}

export default MyPosts;


const MyPostForm = (props) => {
    const onSubmit = (e) => {
        props.addPost(e.post);
    }
    const validate = (e) => {
        const errors = {}
        if (e.post && e.post.length > 100) {
            errors.post = 'Max length is 100'
        } else if (!e.post || e.post === ' ') {
            errors.post = ' '
        }
        return errors;
    }
    return <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>

                <Field
                    name="post"
                    render={({input, meta}) => (
                        <div>
                            <textarea {...input} placeholder={'Make your post...'}
                                      className={meta.touched && meta.error ? s.error : null}/>
                            {meta.touched && meta.error && <span>{meta.error}</span>}
                        </div>
                    )}
                />
                <button type="submit">Send</button>
            </form>
        )}
    />
}






