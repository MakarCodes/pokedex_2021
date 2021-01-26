import Navbar from '../Navbar/Navbar';

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
