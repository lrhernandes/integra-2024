import Navbar from "./components/Navbar";
import UsersTableWrapper from "./components/UsersTableWrapper";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="m-8">
        <UsersTableWrapper />
      </section>
    </main>
  );
}
