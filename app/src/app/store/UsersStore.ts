import create from "zustand";

export type User = {
  id: string;
  nome: string;
  email: string;
  cargo: string;
  sexo: string;
  info: string;
};

type UserStore = {
  users: User[];
  addUser: (user: User) => void;
  removeUser: (userId: string) => void;
};

const useUserStore = create<UserStore>((set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  removeUser: (userId) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== userId),
    })),
}));

export default useUserStore;
