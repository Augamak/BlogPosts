import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Articles = () => {

    const [articles, setArticles] = useState([])
    console.log(articles)
    const [number, setNumber] = useState(0);

    const right = () => {
        setNumber((prev) => {
          if (prev === 1000) return 10;
          return prev +10
        });
      }
    
      const left = () => {
        setNumber((prev) => {
          if (prev === 1000) return 10;
          return prev - 10
        })
      }

    useEffect(() => {
        fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts?offset=${number}&limit=${10}`)
        .then((response) => response.json())
        .then((blogs) => setArticles(blogs.blogs))
        
       
    }, [number]);

    return (
        <div className="about">
            <div className="arrow">
                <span onClick={left} className='simbol-arrow'>⇐</span>
                <span onClick={right} className='simbol-arrow'>⇒</span>{" "}
            </div>
            <div className="cards-blog">
                {articles.map((art) => {
                return (
                    <div className="cards" key={art.id}>
                        <Link className="article-link" to={`/articles/${art.id}`}>
                            {art.id} - {art.title}
                        </Link>
                    </div>
                );
                })}
            </div>
            
        </div> 
    );
};

export default Articles;