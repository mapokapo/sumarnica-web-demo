import { Context, createContext, useContext } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserProviderState {
  user: User | null;
  setUser: (user: User | null) => void;
}

const initialState: UserProviderState = {
  user: null,
  setUser: () => {
    throw new Error("setUser function must be overridden");
  },
};

export const UserProviderContext =
  createContext<UserProviderState>(initialState);

export const useUser = (): UserProviderState => {
  const context = useContext<UserProviderState | undefined>(
    UserProviderContext as Context<UserProviderState | undefined>
  );

  if (context === undefined) {
    throw new Error("useUser must be used within an UserProvider");
  }

  return context;
};
