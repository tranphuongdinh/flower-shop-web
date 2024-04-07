import AppProvider from "@/context/context";
import Navbar from "./Navbar/Navbar";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppProvider>
      <Header />
      <main className="">
        {children}
        <Navbar />
      </main>

      <Footer />
    </AppProvider>
  );
};
export default Layout;
