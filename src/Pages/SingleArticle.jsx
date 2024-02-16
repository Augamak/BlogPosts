import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

const SingleArticle = () => {
    const [article, setArticle] = useState({});
    const {id} = useParams ()
    const navigate = useNavigate ()
    const location = useLocation ()
    console.log(location)
    

useEffect(() => {
    fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`)
    .then((response) => response.json())
    .then((blog) => {
        setArticle(blog.blog)
    })
   
}, []);
    
    

    return (
        <div className="article-post">
          
           <h1>Category - {article.category}</h1>
           <p>{article.content_text}</p>
           <img className="article-img" src={article.photo_url} alt="photo" />
            <BackButton />
        </div> 
    );
};

export default SingleArticle;