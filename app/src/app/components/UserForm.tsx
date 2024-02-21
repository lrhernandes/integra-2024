"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useUserStore, { User } from "../store/UsersStore";
import { useForm } from "react-hook-form";
import { AddUser, AllUsers, EditUser } from "../services/UsersService";
import Button from "./Button";
import Toast from "./Toast";

const UserForm = ({ userData }: { userData?: User | null }) => {
  const [emailError, setEmailError] = useState(false);
  const [feedback, setFeedback] = useState<{
    type?: "success" | "error" | "warning";
    message: string;
    display: boolean;
  }>({ message: "", display: false });
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      id: userData ? userData.id : "",
      nome: userData ? userData.nome : "",
      email: userData ? userData.email : "",
      info: userData ? userData.info : "",
      cargo: userData ? userData.cargo : "",
      sexo: userData ? userData.sexo : "",
    },
  });

  useEffect(() => {
    if (feedback.display) {
      const timer = setTimeout(() => {
        setFeedback((prevFeedback) => ({
          ...prevFeedback,
          display: false,
        }));
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [feedback.display]);

  const onSubmit = async (data: any) => {
    if (userData?.id) {
      const response = await EditUser(data.id, data);
      if (!response.error) {
        setFeedback({
          type: "success",
          message: "User updated successfully!",
          display: true,
        });
      } else {
        setFeedback({
          type: "error",
          message: "Failed to update user.",
          display: true,
        });
      }
    } else {
      const response = await AddUser(data);
      if (!response.error && response.data) {
        setFeedback({
          type: "success",
          message: "User added successfully!",
          display: true,
        });
        useUserStore.getState().addUser(data);
        const usersResponse = await AllUsers();
        useUserStore.setState({ users: usersResponse.data });
      } else {
        setFeedback({
          type: "error",
          message: "Failed to add user.",
          display: true,
        });
      }
    }
  };

  const handleCancel = () => {
    router.push("/");
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailBlur = () => {
    setEmailError(!validateEmail(watch("email")));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl">
        {feedback.display && feedback.type && (
          <Toast message={feedback.message} type={feedback.type} />
        )}
        <div className="mb-4">
          <label className="block mb-2">
            Nome:
            <input
              type="text"
              {...register("nome", { required: true })}
              className={`border ${
                errors.nome ? "border-red-500" : "border-gray-300"
              } rounded-md px-2 py-1 w-full outline-none`}
            />
            {errors.nome && <p className="text-red-500">Campo obrigatório</p>}
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Email:
            <input
              type="email"
              {...register("email", { required: true })}
              onBlur={handleEmailBlur} // Add onBlur event handler
              className={`border ${
                errors.email || emailError
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md px-2 py-1 w-full outline-none`}
            />
            {errors.email && <p className="text-red-500">Campo obrigatório</p>}
            {emailError && (
              <p className="text-red-500">Please enter a valid email address</p>
            )}
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Observação:
            <textarea
              {...register("info", { required: true })}
              placeholder="Insira a observação..."
              maxLength={200}
              className={`border ${
                errors.info ? "border-red-500" : "border-gray-300"
              } rounded-md px-2 py-1 w-full h-40 resize-none outline-none`}
            />
            {errors.info && <p className="text-red-500">Campo obrigatório</p>}
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Cargo:
            <select
              {...register("cargo", { required: true })}
              className={`border ${
                errors.cargo ? "border-red-500" : "border-gray-300"
              } rounded-md px-2 py-1 w-full outline-none`}
            >
              <option value="">Selecione</option>
              <option value="Gerente">Gerente</option>
              <option value="Desenvolvedor">Desenvolvedor</option>
              <option value="Designer">Designer</option>
            </select>
            {errors.cargo && <p className="text-red-500">Campo obrigatório</p>}
          </label>
        </div>
        <div className="mb-4 mt-4">
          <label className="block mb-2">Sexo:</label>
          <label className="inline-flex items-center mb-2 ">
            <input
              type="radio"
              value="Masculino"
              {...register("sexo", { required: true })}
              className="mr-2"
            />
            Masculino
          </label>
          <label className="inline-flex items-center ms-4 ">
            <input
              type="radio"
              value="Feminino"
              {...register("sexo", { required: true })}
              className="mr-2"
            />
            Feminino
          </label>
          {errors.sexo && <p className="text-red-500">Campo obrigatório</p>}
        </div>
        <div className="flex flex-row gap-2">
          <Button action={handleCancel} variation="secondary" text="Cancelar" />
          <Button type="submit" variation="primary" text="Salvar" />
        </div>
      </form>
    </>
  );
};

export default UserForm;
