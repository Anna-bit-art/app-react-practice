import {connect} from "react-redux";
import News from "./News";
import {Component} from "react";

class NewsContainer extends Component {
    render() {
        return (
            <>
                <div>
                    {this.props.news.map(n => (
                        <News userName={n.userName} data={n.data} id={n.id} likesCount={n.likesCount}
                              key={n.id} text={n.text} avatar={n.avatar} images={n.images}/>
                    ))}
                </div>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news
    }
}

export default connect (mapStateToProps, null) (NewsContainer)


