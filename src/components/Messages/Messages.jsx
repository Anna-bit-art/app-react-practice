import s from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
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
                <MessageForm addMessage={props.addMessage}/>
            </div>
        </div>
    )
}

export default Messages;

const MessageForm = (props) => {
    const onSubmit = (e) => {
        console.log(e)
        props.addMessage(e.message);
    }
    return <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>

                <Field
                    name="message"
                    render={({ input, meta }) => (
                        <div>
                            <textarea {...input} placeholder={'Send a message...'}/>
                            {meta.touched && meta.error && <span>{meta.error}</span>}
                        </div>
                    )}
                />
                <button>Send</button>
            </form>
        )}
    />
}








// <Form onSubmit={onSubmit}>
//     {({handleSubmit}) => (
//         <form onSubmit={handleSubmit}>
//             <Field name='post' validate={maxValue(5)}>
//                 {({input, meta})=> (
//                     <div>
//                         <textarea {...input} placeholder={'Send a message...'}/>
//                         {meta.error && meta.touched && <span>{meta.error}</span>}
//                     </div>
//                 )}
//             </Field>
//             <button>Send</button>
//         </form>
//     )}
// </Form>


