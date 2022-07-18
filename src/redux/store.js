// import profileReducer from "./profileReducer";
// import messagesReducer from "./messagesReducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {
//                     id: 'p1',
//                     likesCount: 12,
//                     text: "Oh, I was not made for heaven. No, I don't want to go to heaven. Hell is much better. Think of all the interesting people you're going to meet down there!"
//                 },
//                 {
//                     id: 'p2',
//                     likesCount: 3,
//                     text: "The reason we're successful, darling? My overall charisma, of course."
//                 },
//                 {
//                     id: 'p3',
//                     likesCount: 72,
//                     text: "I am a romantic, but I do put up a barrier around myself, so it is hard for people to get in and to know the real me."
//                 }
//             ],
//             newPostText: ''
//         },
//         messagesPage: {
//             dialogs: [{id: 'david', name: 'David Bowie'},
//                 {id: 'queen', name: 'Group Queen'},
//                 {id: 'kenye', name: 'Kanye West'}],
//             messages: [{id: 1, text: 'Pressure pushing down on me'},
//                 {id: 2, text: 'Pressing down on you, no man ask for'},
//                 {id: 3, text: 'Um ba ba be'}],
//             newMessageText: ''
//         },
//
//     },
//     _callSubscriber() {
//         console.log('State was changed');
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
//         this._callSubscriber(this._state);
//     }
// }
// // window.store = store;
// export default store;


