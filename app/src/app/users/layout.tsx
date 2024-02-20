import Navbar from "../components/Navbar";
import { Wrapper } from "../components/Wrapper";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
