import {addMessage} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {addMessage}),
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