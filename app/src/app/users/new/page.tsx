"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ErrorToast = ({ message }: { message: string }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded">
      {message}
    </div>
  );
};

const Page = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [observacao, setObservacao] = useState("");
  const [cargo, setCargo] = useState("");
  const [sexo, setSexo] = useState("");
  const [formError, setFormError] = useState("");
  const [emailError, setEmailError] = useState(false); // Add emailError state
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!nome || !email || !observacao || !cargo || !sexo) {
      setFormError("Todos os campos são obrigatórios");
      return;
    }
    setFormError("");

    // Handle form submission logic here
  };

  const handleCancel = () => {
    router.push("/");
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailBlur = () => {
    setEmailError(!validateEmail(email)); // Update emailError state on blur
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-2xl">
        {formError && <ErrorToast message={formError} />}
        <div className="mb-4">
          <label className="block mb-2">
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleEmailBlur} // Add onBlur event handler
              className={`border ${
                emailError ? "border-red-500" : "border-gray-300"
              } rounded-md px-2 py-1 w-full`}
            />
          </label>
          {emailError && (
            <p className="text-red-500">Please enter a valid email address</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Observação:
            <textarea
              value={observacao}
              onChange={(e) => setObservacao(e.target.value)}
              maxLength={200}
              className="border border-gray-300 rounded-md px-2 py-1 w-full h-40 resize-none"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Cargo:
            <select
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            >
              <option value="">Selecione</option>
              <option value="gerente">Gerente</option>
              <option value="desenvolvedor">Desenvolvedor</option>
              <option value="social-media">Social Media</option>
            </select>
          </label>
        </div>
        <div className="mb-4 mt-4">
          <label className="block mb-2">Sexo:</label>
          <label className="inline-flex items-center mb-2">
            <input
              type="radio"
              value="masculino"
              checked={sexo === "masculino"}
              onChange={(e) => setSexo(e.target.value)}
              className="mr-2"
            />
            Masculino
          </label>
          <label className="inline-flex items-center ms-4">
            <input
              type="radio"
              value="feminino"
              checked={sexo === "feminino"}
              onChange={(e) => setSexo(e.target.value)}
              className="mr-2"
            />
            Feminino
          </label>
        </div>
        <div>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Registrar
          </button>
        </div>
      </form>
    </>
  );
};

export default Page;
