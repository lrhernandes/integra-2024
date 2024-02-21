"use client";
import useUserStore, { User } from "../store/UsersStore";

interface AppInitializerProps {
  users: User[];
}

export default function AppInitializer({ users }: AppInitializerProps) {
  useUserStore.setState({ users: users || [] });

  return null;
}
