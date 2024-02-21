import { User } from "../store/UsersStore";
import { grabber } from "./grabber";

export const AllUsers = async () => {
  try {
    const response = await grabber<User[], Request>("GET", "/user");
    return { data: response as User[], error: null };
  } catch (error) {
    return {
      data: [],
      error: error,
    };
  }
};

export const GetUser = async (id: string) => {
  try {
    const response = await grabber<User, Request>("GET", `/user/${id}`);
    return { data: response as User, error: null };
  } catch (error) {
    return {
      data: null,
      error: error,
    };
  }
};

export const EditUser = async (id: string, user: User) => {
  try {
    const response = await grabber<User, User>("PUT", `/user/${id}`, user);
    return { data: response as User, error: null };
  } catch (error) {
    return {
      data: null,
      error: error,
    };
  }
};

export const DeleteUser = async (id: string) => {
  try {
    const response = await grabber<User, Request>("DELETE", `/user/${id}`);
    return { data: response as User, error: null };
  } catch (error) {
    return {
      data: null,
      error: error,
    };
  }
};
export const AddUser = async (user: User) => {
  try {
    const response = await grabber<User, User>("POST", "/user", user);
    return { data: response as User, error: null };
  } catch (error) {
    return {
      data: null,
      error: error,
    };
  }
};
