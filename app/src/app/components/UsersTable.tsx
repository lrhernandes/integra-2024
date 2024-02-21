import React, { useState, useEffect } from "react";
import { FiEye, FiEdit, FiTrash, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";
import useUserStore, { User } from "../store/UsersStore";
import Modal from "./Modal";
import { DeleteUser } from "../services/UsersService";
import Toast from "./Toast";

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

const UserDetails: React.FC<{
  user: User;
  setIsModalOpen: (value: boolean) => void;
}> = ({ user, setIsModalOpen }) => {
  return (
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
              {user?.nome.charAt(0)}
            </p>
          </div>
          <h2 className="text-xl font-bold mb-2 text-center">{user?.nome}</h2>
          <p className="text-gray-500 mb-2 text-center">{user?.email}</p>
          <p className="text-gray-500 mb-2 text-center">{user?.sexo}</p>
          <p className="text-gray-500 mb-4 px-10 py-6 text-center text-sm italic">
            {user?.info}
          </p>
          <p className="text-gray-500 mb-4 text-center">
            <span className="inline-block bg-green-700 bg-opacity-70 text-white rounded-full px-4 py-1 border border-green-600">
              {user?.cargo}
            </span>
          </p>
        </div>
      </div>
    </Modal>
  );
};

const ConfirmationModal: React.FC<{
  user: User;
  setIsModalOpen: (value: boolean) => void;
  handleDeleteUser: (user: User) => void;
}> = ({ user, setIsModalOpen, handleDeleteUser }) => {
  return (
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
          <h2 className="text-xl font-bold mb-2 text-center">
            Confirmar Deleção
          </h2>
          <p className="text-gray-500 mb-4 px-10 py-6 text-center text-sm italic">
            Tem certeza que deseja deletar {user?.nome}?
          </p>
          <div className="flex justify-center">
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded-md mr-2"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              Cancelar
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md"
              onClick={() => {
                handleDeleteUser(user);
                setIsModalOpen(false);
              }}
            >
              Deletar
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const UsersTable: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [feedback, setFeedback] = useState<{
    type?: "success" | "error" | "warning";
    message: string;
    display: boolean;
  }>({ message: "", display: false });

  const { users } = useUserStore.getState();
  console.log("💁", users);

  const handleEyeButtonClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteButtonClick = (user: User) => {
    setSelectedUser(user);
    setIsConfirmationModalOpen(true);
  };

  const handleDeleteUser = async (user: User) => {
    if (user?.id) {
      const response = await DeleteUser(user.id);
      if (!response.error) {
        setFeedback({
          type: "success",
          message: "User deleted successfully!",
          display: true,
        });
        useUserStore.getState().removeUser(user.id);
      } else {
        setFeedback({
          type: "error",
          message: "Failed to delete user.",
          display: true,
        });
      }
    }
  };

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFeedback((prevFeedback) => ({
        ...prevFeedback,
        display: false,
      }));
    }, 2000);

    return () => clearTimeout(timer);
  }, [feedback.display]);

  return (
    <>
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
                    className="p-2 h-full hover:text-purple-800 flex flex-col justify-center items-center gap-1"
                    onClick={() => handleEyeButtonClick(user)}
                  >
                    <FiEye size={22} />
                    <span style={{ fontSize: "10px" }}>Ver</span>
                  </button>
                  <button
                    className="p-2 h-full hover:text-purple-800 flex flex-col justify-center items-center gap-1"
                    onClick={() => {
                      router.push(`/users/${user.id}`);
                    }}
                  >
                    <FiEdit size={22} />
                    <span style={{ fontSize: "10px" }}>Editar</span>
                  </button>
                  <button
                    className="p-2 h-full hover:text-purple-800 flex flex-col justify-center items-center gap-1"
                    onClick={() => handleDeleteButtonClick(user)}
                  >
                    <FiTrash size={22} />
                    <span style={{ fontSize: "10px" }}>Deletar</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isModalOpen && selectedUser && (
          <UserDetails user={selectedUser} setIsModalOpen={setIsModalOpen} />
        )}

        {isConfirmationModalOpen && selectedUser && (
          <ConfirmationModal
            user={selectedUser}
            setIsModalOpen={setIsConfirmationModalOpen}
            handleDeleteUser={handleDeleteUser}
          />
        )}
      </div>
      {feedback.display && feedback.type && (
        <Toast message={feedback.message} type={feedback.type} />
      )}
    </>
  );
};

export default UsersTable;
