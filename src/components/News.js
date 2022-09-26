import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1,

        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=ru&apiKey=3df5075467514cc3a31c7682e0d3b13d&page=1";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=ru&apiKey=3df5075467514cc3a31c7682e0d3b13d&page=1`;
        let data = await fetch(url);
        let parsedData = await data.json()

        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles
        })
    }

    handleNextClick = async () => {
        if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3df5075467514cc3a31c7682e0d3b13d&page=1`;
            let data = await fetch(url);
            let parsedData = await data.json()
    
            this.setState({
                page: this.state.page+1,
                articles: parsedData.articles
            })
        }
    }

    search = async () => {
        let query=document.getElementById("query").value;
        this.setState({
            articles: this.state.articles.filter(artircle=>{
                console.log(artircle.title, query)
               return String(artircle.title).indexOf(query)>=0?true:false || String(artircle.description).indexOf(query)>=0?true:false;
            }),
            page: this.state.page
})
}

    render() {
        return (
            <main>
                    <h1>NewsApp</h1>
                    <div className='form'>
                        <input placeholder="Input search query" type="text" id="query"/>
                        <button id="search" onClick={this.search}>Search</button>
                        <button id="reset" onClick={()=>{window.location.reload()}}>Reset</button>
                    </div>
                    <div id="container">
                        {this.state.articles.map((element) => {
                            return <>
                                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </>
                        })}
                    </div>
            </main>
        )
    }
}

export default News
