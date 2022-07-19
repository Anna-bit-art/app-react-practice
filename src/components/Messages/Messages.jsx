import s from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Field, Form} from "react-final-form";
import {Textarea} from "../common/formsControl/formsControls";
import {maxValue} from "../../utils/validators";

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
                <MessageForm addMessage={props.addMessage}/>
            </div>
        </div>
    )
}


const MessageForm = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.addMessage(formData.message);
    }
    return (
        <Form onSubmit={onSubmit}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Field name={'message'} component={Textarea} type={'text'} placeholder={'Send a message...'}
                           validate={maxValue(10)}/>
                    <button>Send</button>
                </form>
            )}
        </Form>
    )

}


export default Messages;




