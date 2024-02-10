import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Articles = () => {

    const [articles, setArticles] = useState([])
    console.log(articles.blogs)

    useEffect(() => {
        fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
        .then((response) => response.json())
        .then((blogs) => setArticles(blogs.blogs))
       
    }, []);

    return (
        <div className="about">
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
    );
};

export default Articles;