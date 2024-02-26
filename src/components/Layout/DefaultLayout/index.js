import Header from "~/components/Layout/components/Header";
import Wrapper from "~/components/Layout/components/Wrapper";
import Menu from "~/components/Layout/components/Menu";
import SiteFooter from "../components/SiteFooter";
import Footer from "../components/Footer";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <Wrapper />
      <Menu />
      <div>{children}</div>
      <SiteFooter />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
