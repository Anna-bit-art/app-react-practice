import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import { Form, Field } from 'react-final-form';
import {maxValue} from "../../../utils/validators";
import {Textarea} from "../../common/formsControl/formsControls";


const  MyPosts = (props) => {

    return (
        <>
            <h1> My posts </h1>
            <div className={s.field}>
                <MyPostForm addPost={props.addPost}/>
            </div>


            <div className={s.posts}>
                <div>
                    {props.posts.map(p => (
                        <Post id={p.id} like={p.likesCount} key={p.id} text={p.text} profile={props.profile}/>
                    ))}
                </div>
            </div>
        </>
    )
};



const MyPostForm = (props) => {
   const onSubmit = (formData) => {
       console.log(formData)
       props.addPost(formData.myPost);
   }
    return (
        <Form onSubmit={onSubmit}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Field name={'myPost'} component={Textarea} type={'text'} placeholder={'Make your the new post...'}
                           validate={maxValue(250)}/>
                    <button>Send</button>
                </form>
            )}
        </Form>
    )

}

export default MyPosts;


// <textarea onChange={onPostChange} placeholder='Make your the new post...'
//           value={props.newPostText}/>
// <button onClick={onAddPost}><a href='#'>Send</a></button>

