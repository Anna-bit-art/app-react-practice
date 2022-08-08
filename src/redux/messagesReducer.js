const ADD_MESSAGE = 'message/ADD-MESSAGE';

let initialState = {
    dialogs: [{id: 'david', name: 'David Bowie'},
        {id: 'queen', name: 'Group Queen'},
        {id: 'kenye', name: 'Kanye West'}],
    messages: [{id: 1, text: 'Pressure pushing down on me'},
        {id: 2, text: 'Pressing down on you, no man ask for'},
        {id: 3, text: 'Um ba ba be'}]
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = action.newMessage;
            return {
                ...state,
                messages: [...state.messages, {id: 4, text: newMessage}]
            }
        }
        default:
            return state;
    }
}

export const addMessage = (newMessage) => ({type: ADD_MESSAGE, newMessage});

export default messagesReducer;
