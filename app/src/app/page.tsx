import Navbar from "./components/Navbar";
import UsersTableWrapper from "./components/UsersTableWrapper";
import { AllUsers } from "./services/UsersService";
import AppInitializer from "./components/AppInitializer";

export default async function Home() {
  const response = await AllUsers();
  return (
    <main className="min-h-screen">
      <AppInitializer users={response.data} />
      <Navbar />
      <section className="m-8">
        <UsersTableWrapper />
      </section>
    </main>
  );
}
