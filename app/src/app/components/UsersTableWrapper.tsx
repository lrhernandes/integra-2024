"use client";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { Wrapper } from "./Wrapper";
import UsersTable from "./UsersTable";
import Button from "./Button";
import { useRouter } from "next/navigation";

const UsersTableWrapper: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex mb-8 mt-4 flex-row justify-between items-center w-full">
        <h2 className="text-2xl font-semibold">Users</h2>
        <Button
          text="ADD USER"
          type="primary"
          action={() => {
            router.push("/users/new");
          }}
          icon={FiPlus}
        />
      </div>
      <Wrapper>
        <UsersTable />
      </Wrapper>
    </>
  );
};

export default UsersTableWrapper;
