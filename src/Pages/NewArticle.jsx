import { useRef } from "react";
import { useContext } from "react";
import { ArticleCtx } from "../App";
import { useNavigate } from "react-router-dom";


export const NewArticle = () => {
  const {articles, setArticles} = useContext(ArticleCtx);
  const navigate = useNavigate()
  const title = useRef ();
  const text = useRef();

    const createArticleManager = () => {
      const newArticle = {
        title: title.current.value,
        content_text: text.current.value,
        photo_url: `https://api.slingacademy.com/public/sample-blog-posts/${articles.length + 1}.png`,
        id: articles.length + 1
      }
      setArticles((prev) => [...prev, newArticle])
      navigate(`/articles/${articles.length + 1}`, {
        state: { 
          title: title.current.value,  
          content_text: text.current.value, 
          photo_url: `https://api.slingacademy.com/public/sample-blog-posts/${articles.length + 1}.png`,
        },
      })
    }


    // <img src="https://api.slingacademy.com/public/simple-blog-posts/10.png" alt="image" />
    return (
        <div className="new-article">
          <h1>NEW ARTICLE</h1>
          <input ref={title} type="text" name="title" placeholder="Title" />
          <textarea ref={text} type="text" name="text" placeholder="Your Text here ..." />
          <button onClick={createArticleManager}>Create New Article</button>
        </div> 
    );
};

export default NewArticle;