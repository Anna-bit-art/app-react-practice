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

