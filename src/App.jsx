import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import Articles from "./Pages/Articles";
import { Route, Routes } from "react-router-dom";
import { MainLayout} from "./layouts/MainLayout";
import SingleArticle from "./Pages/SingleArticle";
import NewArticle from "./Pages/NewArticle";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchArticles } from "./store/slices/thunks";

 export const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArticles());
}, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<SingleArticle />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/new-article" element={<NewArticle />} />
        </Route>
      </Routes>
    </>
  );
};


