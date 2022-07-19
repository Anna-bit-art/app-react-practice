import {addPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost}) (MyPosts);

export default MyPostsContainer;



// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//         {(store) => {
//             let addPost = () => {
//                 store.dispatch(addPostActionCreator());
//             }
//             let onPostChange = (text) => {
//                 store.dispatch(updateNewPostActionCreator(text));
//             }
//             return <MyPosts updateNewPostActionCreator={onPostChange}
//                             addPost={addPost}
//                             posts={store.getState().profilePage.posts}
//                             newPostText={store.getState().profilePage.newPostText}/>
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }