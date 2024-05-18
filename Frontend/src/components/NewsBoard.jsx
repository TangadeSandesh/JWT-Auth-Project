import React, { useEffect} from 'react'
import {useState } from 'react'
import NewsItems from './NewsItems';

const NewsBoard = ({category}) => {
    const [article, setArticles] = useState([]);

    useEffect(()=>{
        let url =`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;
        fetch(url).then(response => response.json())
        .then(data => {
            setArticles(data.articles);
        });
        
    }, [category]);
  return (
    <div>
      <h2 className='text-center mt-2'>LATEST <span className='badge bg-danger text-dark'>NEWS</span></h2>
      <div className="container">
                <div className="row">
                    {article.map((article, index) => (
                        <div key={index} className="col-md-3">
                            <NewsItems title={article.title} description={article.description} src={article.urlToImage} url={article.url} />
                        </div>
                    ))}
                </div>
            </div>
    </div>
  )
};

export default NewsBoard
