import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArticleCtx } from "../App";

const Articles = () => {

    const {article} = useContext(ArticleCtx)
    const [articles, setArticles] = useState([])
    const [number, setNumber] = useState(0);
    const location = useLocation ()
    console.log(location)

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
                {articles?.map((art) => {
                return (
                    <div className="cards" key={art.id}>
                        <Link className="article-link" to={`/articles/${art.id}`}>
                             <div className="article-title">{art.title}</div>
                            <img src={art.photo_url} alt="photo" style={{width: "150px", paddingTop: "20px"}} />
                            <button className="cards-button">Read more</button>
                        </Link>
                    </div>
                );
                })}
            </div>
            
        </div> 
    );
};

export default Articles;