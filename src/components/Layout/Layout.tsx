import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
