import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
    const [article, setArticle] = useState({});
    const {id} = useParams ()
    

useEffect(() => {
    fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`)
    .then((response) => response.json())
    .then((blog) => {
        setArticle(blog.blog)
        console.log(blog.blog)
    })
   
}, []);
    

    return (
        <div className="article-post">
          
           <h1>Category - {article.category}</h1>
           <p>{article.content_text}</p>
           <img className="article-img" src={article.photo_url} alt="photo" />
        </div> 
    );
};

export default SingleArticle;