import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import { Form, Field } from 'react-final-form';


const  MyPosts = (props) => {

    return (
        <div>
            <h1> My posts </h1>
            <div className={s.split}>
                <div className={s.field}>

                    <MyPostForm onAddPost={props.addPost} onPostChange={props.updateNewPost} newPostText={props.newPostText}/>

                </div>

                <div className={s.noDiv}></div>
            </div>

            <div className={s.posts}>
                <div>
                    {props.posts.map(p => (
                        <Post id={p.id} like={p.likesCount} key={p.id} text={p.text} profile={props.profile}/>
                    ))}
                </div>
            </div>
        </div>
    )
};




const MyPostForm = (props) => {
   const onSubmit = (formData) => {
       console.log(formData)
       props.onPostChange(formData.myPost);
       props.onAddPost();
   }
    return (
        <Form onSubmit={onSubmit}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Field name={'myPost'} component={'textarea'} type={'text'} placeholder={'Make your the new post...'} />
                    <button>Send</button>
                </form>
            )}
        </Form>
    )

}




// <textarea onChange={onPostChange} placeholder='Make your the new post...'
//           value={props.newPostText}/>
// <button onClick={onAddPost}><a href='#'>Send</a></button>

export default MyPosts;