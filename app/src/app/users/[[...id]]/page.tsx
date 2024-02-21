import UserForm from "@/app/components/UserForm";
import { Wrapper } from "@/app/components/Wrapper";
import React from "react";

import { GetUser } from "@/app/services/UsersService";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";

const Page: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const { data } = await GetUser(params.id);

  return (
    <>
      <Navbar />
      <div>
        <section className="m-8">
          <div className="flex mb-8 mt-4 flex-row items-center w-full">
            <Link
              href={"/"}
              className="flex items-center mr-2 text-lg text-gray-500"
            >
              <h2>Home /</h2>
            </Link>
            <h2 className="text-lg font-semibold">
              {data ? "Editar " : "Cadastrar "} usuário
            </h2>
          </div>
          <Wrapper>
            <UserForm userData={data} />
          </Wrapper>
        </section>
      </div>
    </>
  );
};

export default Page;
