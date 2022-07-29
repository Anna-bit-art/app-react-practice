import userPhoto from "../img/JohnyyDepp.jpeg";
import img1 from '../img/johnny1.jpeg';
import img2 from '../img/pirate2.jpeg';
import img3 from '../img/pirate3.jpeg';
import img4 from '../img/pirate4.jpeg';
import img5 from '../img/pirate5.jpeg';
import img6 from '../img/medusa.jpeg';
import userPhoto2 from '../img/medusaAvatar.jpg';
import userPhoto3 from '../img/google.jpeg';
import img7 from '../img/kentucky.jpeg';
import img8 from '../img/kentuky2.jpeg';




const SET_NEWS = 'SET_NEWS';

let initialState = {
    news: [
        {
            userName: 'Google News',
            data: '29 Jul 2022',
            id: 'n2',
            likesCount: 3,
            avatar: userPhoto3,
            text: "Kentucky floods kill at least 16 as governor warns toll will be a lot higher",
            images: [
                {id: '7', photoUrl: img7, big: true},
                {id: '8', photoUrl: img8, big: true},
            ]
        },
        {
            userName: 'Medusa Festival',
            data: '6 Jul 2022',
            id: 'n3',
            likesCount: 372,
            avatar: userPhoto2,
            text: "El Medusa SunBeach Festival acogerá la capital turística de la Ribera del 10 al 15 de agosto. El macrofestival de música electrónica espera la asistencia de más de 300.000 personas. ",
            images: [ {id: '6', photoUrl: img6, big: false} ]
        },
        {
            userName: 'Johnny Depp',
            data: '17 May 2022',
            id: 'n1',
            likesCount: 12,
            avatar: userPhoto,
            text: undefined,
            images: [
                {id: '1', photoUrl: img1, big: true},
                {id: '2', photoUrl: img2, big: false},
                {id: '3', photoUrl: img3, big: false},
                {id: '4', photoUrl: img4, big: true},
                {id: '5', photoUrl: img5, big: true}
            ]
        }
    ]
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS: {
            let news = action.news;
            return {
                ...state,
                news: [{id: '', likesCount: 0, text: news}, ...state.news]
            }
        }
        default:
            return state;
    }
};

export const setNew = (news) => ({type: SET_NEWS, news});

export default newsReducer;