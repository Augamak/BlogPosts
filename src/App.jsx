import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import Articles from "./Pages/Articles";
import { Route, Routes } from "react-router-dom";
import { MainLayout} from "./layouts/MainLayout";
import SingleArticle from "./Pages/SingleArticle";


 export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<SingleArticle />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};


