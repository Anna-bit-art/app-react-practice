
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
        dialogs: [{id: 'david', name: 'David Bowie'},
            {id: 'queen', name: 'Group Queen'},
            {id: 'kenye', name: 'Kanye West'}],
        messages: [{id: 1, text: 'Pressure pushing down on me'},
            {id: 2, text: 'Pressing down on you, no man ask for'},
            {id: 3, text: 'Um ba ba be'}],
        newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 4, text: newMessage} ]
            }
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default: return state;
    }
}

export const addMessage = () => ({type:ADD_MESSAGE});
export const updateNewMessage = (text) => ({type:UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default messagesReducer;
