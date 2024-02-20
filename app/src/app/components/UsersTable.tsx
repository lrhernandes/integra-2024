import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";

const users = [
  {
    id: 1,
    nome: "John Doe",
    email: "john@example.com",
    cargo: "Desenvolvedor",
    sexo: "M",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nisl nec nisl tincidunt tincidunt",
  },
  {
    id: 2,
    nome: "Jane Ane",
    email: "Jane@example.com",
    cargo: "Gerente",
    sexo: "F",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nisl nec nisl tincidunt tincidunt",
  },
];

interface UserProps {
  id: number;
  nome: string;
  email: string;
  cargo: string;
  sexo: string;
  info: string;
}

interface TableHeaderProps {
  text: string;
}

const TableHeader: React.FC<TableHeaderProps> = ({ text }) => {
  return (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      {text}
    </th>
  );
};

const UsersTable: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<UserProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEyeButtonClick = (user: UserProps) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const router = useRouter();

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-100">
        <thead>
          <tr>
            <TableHeader text="Name" />
            <TableHeader text="Email" />
            <TableHeader text="Cargo" />
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">{user.nome}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.cargo}</td>
              <td className="flex flex-row justify-center items-center h-full">
                <button
                  className="p-2 h-full"
                  onClick={() => handleEyeButtonClick(user)}
                >
                  <FiEye size={22} />
                </button>
                <button
                  className="p-2 h-full"
                  onClick={() => {
                    router.push(`/users/${user.id}`);
                  }}
                >
                  <FiEdit size={22} />
                </button>
                <button className="p-2 h-full">
                  <FiTrash size={22} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && selectedUser && (
        <Modal>
          <div className="modal-content w-full pb-10 relative">
            <button
              className="absolute top-0 right-0 mt-2 mr-2"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              <FiX size={22} />
            </button>
            <div className="pt-10">
              <div className="flex items-center justify-center w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4">
                <p className="text-2xl text-gray-500 text-center">
                  {selectedUser?.nome.charAt(0)}
                </p>
              </div>
              <h2 className="text-xl font-bold mb-2 text-center">
                {selectedUser?.nome}
              </h2>
              <p className="text-gray-500 mb-2 text-center">
                {selectedUser?.email}
              </p>
              <p className="text-gray-500 mb-4 px-10 py-6">
                {selectedUser?.info}
              </p>
              <p className="text-gray-500 mb-4 text-center">
                <span className="inline-block bg-green-700 bg-opacity-70 text-white rounded-full px-4 py-1 border border-green-600">
                  {selectedUser?.cargo}
                </span>
              </p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default UsersTable;
