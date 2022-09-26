import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        let defurl='https://ysia.ru/wp-content/uploads/2019/04/225353843_5b787050a10e5.jpg';
        return (
                <div className="article">
                    <a href={newsUrl} target="_blank" rel='noreferrer'>
                        <img src={!imageUrl?defurl:imageUrl} className="card-img" alt="..." />
                        <h2>{title}</h2>
                        <p className="card-text">{description}</p>
                    </a>
                </div>
            
        )
    }
}

export default NewsItem
