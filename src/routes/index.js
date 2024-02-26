import Home from "~/pages/Home";
import Promotion from "~/pages/Promotion";
import Login from "~/pages/LoginPage";
import Intro from "~/pages/Intro";
import Register from "~/pages/RegisterPage";
import ContactPage from "~/pages/ContactPage";
import DetailProduct from "~/pages/DetailProduct";
import HotProduct from "~/pages/HotProduct";
import Product from "~/pages/Product";
import NewsPage from "~/pages/NewsPage";
import Product3ce from "~/pages/Product3ce";
import ProductDior from "~/pages/ProductDior";
import RomandPage from "~/pages/RomandPage";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/promotion", component: Promotion },
  { path: "/login", component: Login },
  { path: "/intro", component: Intro },
  { path: "/register", component: Register },
  { path: "/contact", component: ContactPage },
  { path: "/detail", component: DetailProduct },
  { path: "/product", component: Product },
  { path: "/hot-product", component: HotProduct },
  { path: "/news", component: NewsPage },
  { path: "/3ce", component: Product3ce },
  { path: "/dior", component: ProductDior },
  { path: "/romand", component: RomandPage },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
