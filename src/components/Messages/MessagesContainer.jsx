import {addMessage, updateNewMessage,} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {addMessage, updateNewMessage}),
    withAuthRedirect
) (Messages);








// let AuthRedirectComponent = withAuthRedirect(Messages);
// const MessagesContainer = connect(mapStateToProps, {addMessage, updateNewMessage}) (AuthRedirectComponent);

// моя контейнерная компонента
// const MessagesContainer = () => {
//     return (
//         <StoreContext.Consumer>{(store) => {
//             let sendMessage = () => {
//                 store.dispatch(addMessageActionCreator());
//             }
//             let onMessageChange = (text) => {
//                 store.dispatch(updateNewMessageTextActionText(text));
//             }
//             return <Messages addMessage={sendMessage}
//                              updateNewMessage={onMessageChange}
//                              dialogs={store.getState().messagesPage.dialogs}
//                              messages={store.getState().messagesPage.messages}
//                              newMessageText={store.getState().messagesPage.newMessageText}/>
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

//
// let mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage() {
//             dispatch(addMessageActionCreator());
//             },
//         updateNewMessage(text) {
//             dispatch(updateNewMessageTextActionText(text));
//         }
//     }
// }