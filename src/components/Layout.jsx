import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
