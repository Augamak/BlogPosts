import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import Articles from "./Pages/Articles";
import { Route, Routes } from "react-router-dom";
import { MainLayout} from "./layouts/MainLayout";
import SingleArticle from "./Pages/SingleArticle";
import { createContext, useState } from "react";
import NewArticle from "./Pages/NewArticle";
import { useEffect, useState } from "react";

 export const ArticleCtx = createContext({})

 export const App = () => {
  
  const [articles, setArticles] = useState([])

  useEffect(() => {
      fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts?offset=${number}&limit=${10}`)
      .then((response) => response.json())
      .then((blogs) => setArticles(blogs.blogs))
      
     
  }, [number]);
  

  return (
    <>
      <ArticleCtx.Provider value={{articles, setArticles}}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<SingleArticle />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/new-article" element={<NewArticle />} />
          </Route>
        </Routes>
      </ArticleCtx.Provider>
    </>
  );
};


