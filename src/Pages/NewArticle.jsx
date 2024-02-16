import { useRef } from "react";
import { useContext } from "react";
import { ArticleCtx } from "../App";


export const NewArticle = () => {
  const {articles, setArticles} = useContext(ArticleCtx)
  const title = useRef ();
  const text = useRef();
    const createArticleManager = () => {
      const newArticle = {
        title: title.current.value,
        photo_url: `https://api.slingacademy.com/public/sample-blog-posts/${articles.length + 1}.png`
      }
      setArticles((prev) => [...prev, newArticle])
      console.log(newArticle)
    }


    <img src="https://api.slingacademy.com/public/simple-blog-posts/10.png" alt="" />
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