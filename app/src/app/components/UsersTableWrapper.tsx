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
        <button
          onClick={() => {
            router.push("/users/new");
          }}
          className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded flex flex-row justify-center items-center gap-2"
        >
          <span>
            <FiPlus />
          </span>
          ADD USER
        </button>
      </div>
      <Wrapper>
        <UsersTable />
      </Wrapper>
    </>
  );
};

export default UsersTableWrapper;
