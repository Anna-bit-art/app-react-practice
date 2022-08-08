// import React from "react";
// import s from "./ProfileStatus.module.css";
//
// class ProfileStatusClass extends React.Component {
//     state = {
//         editMode: false,
//         status: this.props.status
//     }
//     activateEditMode = () => {
//         this.setState(
//             {
//                 editMode: true
//             })
//     }
//     deactivateEditMode = () => {
//         this.setState(
//             {
//                 editMode: false
//             })
//         this.props.updateStatus(this.state.status);
//     }
//     onStatusChange = (e) => {
//         this.setState ({
//             status: e.currentTarget.value
//         })
//     }
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         if(prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
//         }
//     }
//
//     render() {
//         return (
//             <>
//                 {!this.state.editMode &&
//                     <div>
//                         <h5 className={s.profileStatus} onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'} </h5>
//                     </div>
//                 }
//                 {this.state.editMode &&
//                     <div>
//                         <input className={s.profileStatusInput} type='text' autoFocus={true}
//                             value={this.state.status}
//                             onBlur={this.deactivateEditMode}
//                             onChange={this.onStatusChange}>
//                         </input>
//                     </div>
//                 }
//             </>
//         )
//     }
// }
//
// export default ProfileStatusClass;
//
//
