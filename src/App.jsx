import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import Articles from "./Pages/Articles";
import { Route, Routes } from "react-router-dom";
import { MainLayout} from "./layouts/MainLayout";
import SingleArticle from "./Pages/SingleArticle";
import { createContext, useState } from "react";
import NewArticle from "./Pages/NewArticle";

 export const ArticleCtx = createContext({})

 export const App = () => {
  const [articles, setArticles] = useState ([])
  

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


