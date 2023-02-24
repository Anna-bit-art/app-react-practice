import s from './News.module.css';
import noAvatar from "../../img/catAvatarLittle.jpeg";
import like from "../../img/like.png";


const News = (props) => {

    return (
        <div className={s.new}>
            <div className={s.userInfo}>
                <img alt={'avatar'} className={s.avatarNews} src={props.avatar ? props.avatar : noAvatar}/>
                <span>{props.userName}</span>
                <span className={s.dataNews}>{props.data}</span>
            </div>

            <div className={s.newText}>
                <p>{props.text}</p>
            </div>

            <div className={s.images}>
                {props.images.length === 1

                    ? props.images.map(i =>
                        <figure key={i.id} className={s.oneImage}>
                            <img alt={'news'} src={i.photoUrl}/>
                        </figure>
                    )
                    : props.images.map(i =>
                        <figure key={i.id} className={i.big ? s.bigger : null}>
                            <img alt={'news'} src={i.photoUrl}/>
                        </figure>
                    )
                }
            </div>

            <div className={s.like}>
                <img alt={'like'} src={like}/>
                <span className={s.likesCount}>{props.likesCount}</span>
            </div>

        </div>
    )
}

export default News;
