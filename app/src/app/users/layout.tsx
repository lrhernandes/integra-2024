import Navbar from "../components/Navbar";
import { Wrapper } from "../components/Wrapper";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <section className="m-8">
        <div className="flex mb-8 mt-4 flex-row justify-between items-center w-full">
          <h2 className="text-2xl font-semibold">Cadastrar novo usuário</h2>
        </div>
        <Wrapper>{children}</Wrapper>
      </section>
    </>
  );
};

export default Layout;
