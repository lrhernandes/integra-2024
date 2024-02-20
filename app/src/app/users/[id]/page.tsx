import UserEditForm from "@/app/components/UserEditForm";
import { Wrapper } from "@/app/components/Wrapper";
import React from "react";

const Page: React.FC = () => {
  return (
    <div>
      <section className="m-8">
        <div className="flex mb-8 mt-4 flex-row justify-between items-center w-full">
          <h2 className="text-2xl font-semibold">Editar usuário</h2>
        </div>
        <Wrapper>
          <UserEditForm />
        </Wrapper>
      </section>
    </div>
  );
};

export default Page;
