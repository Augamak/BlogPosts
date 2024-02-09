import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Products from "./Pages/Products";
import Reviews from "./Pages/Reviews";
import { Router } from "vue-router";
import { MainLayout} from "./layouts/MainLayout";


 export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};


