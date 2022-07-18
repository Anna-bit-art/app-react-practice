import s from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Navigate} from "react-router-dom";
import {Field, Form} from "react-final-form";

const Messages = (props) => {

    let dialogsElements = props.dialogs.map( dialog => (<DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>) );
    let messagesElements = props.messages.map( message => (<Message message={message.text} key={message.id}/>) );


    // if(!props.isAuth) return <Navigate to={"/login"} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>{dialogsElements}</div>
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                    <MessageForm updateNewMessage={props.updateNewMessage} addMessage={props.addMessage}/>
            </div>
        </div>
    )
}


const MessageForm = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.updateNewMessage(formData.message);
        props.addMessage();
    }
    return (
        <Form onSubmit={onSubmit}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Field name={'message'} component={'textarea'} type={'text'} placeholder={'Send a message...'} />
                    <button>Send</button>
                </form>
            )}
        </Form>
    )

}

let a = 2.5




export default Messages;




{/*<textarea onChange={onMessageChange} placeholder='Send a message...' value={props.newMessageText}/>*/}
{/*<button onClick={onSendMessage}><a href='#'>Send</a></button>*/}