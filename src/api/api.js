import axios from "axios";

const users = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    data:  {},
    withCredentials: true,
    headers:{
        'API-KEY': 'da71eae0-46cf-4f59-8d46-d01d15e90512'
    }
})


export const UsersApi = {
    getUsers(pageSize, currentPage) {
        return users.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    followUser(userId) {
        return users.post(`follow/${userId}`)
            .then(response => response.data);
    },
    removeUser(userId) {
        return users.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    profile(userId) {
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId)
    }
}


export const authAPI = {
    me() {
        return users.get('auth/me')
            .then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return users.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data);
    },
    logout(){
        return users.delete(`auth/login`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return users.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId) {
        return users.get(`profile/status/${userId}`)
    },
    updateStatus(newStatus) {
        return users.put(`profile/status`, {status: newStatus})
    }
}







// axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true})
//     .then(response => {
//         if(response.data.resultCode === 0) {
//             let {id, email, login} = response.data.data;
//             this.props.setAuthUserData(id, email, login);
//         }
//     })

// const follow = axios.create({
//     baseURL: `https://social-network.samuraijs.com/api/1.0/`,
//     data:  {},
//     withCredentials: true,
//     headers:{
//         'API-KEY': 'da71eae0-46cf-4f59-8d46-d01d15e90512'
//     }
// })
//
// export const UserFollow = {
//     followUser(userId) {
//         return follow.post(`follow/${userId}`)
//             .then(response => response.data);
//     },
//     removeUser(userId) {
//         return follow.delete(`follow/${userId}`)
//             .then(response => response.data);
//     }
// }











