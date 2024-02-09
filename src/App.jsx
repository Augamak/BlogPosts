import Home from "./Pages/Home";

import Contacts from "./Pages/Contacts";
import Articles from "./Pages/Articles";
import { Route, Routes } from "react-router-dom";
import { MainLayout} from "./layouts/MainLayout";


 export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="articles" element={<Articles />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};


