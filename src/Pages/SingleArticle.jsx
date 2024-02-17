import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

export const SingleArticle = () => {
    const [article, setArticle] = useState({});
    const {id} = useParams ()
    const { state} = useLocation ()
    
    return (
        <div className="article-post">
          
           <h1>Category - {state.title}</h1>
           <p>{state.content_text}</p>
           <img className="article-img" src={state.photo_url} alt="photo" />
            <BackButton />
        </div> 
    );
};

export default SingleArticle;