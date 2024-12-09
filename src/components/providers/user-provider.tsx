import { User, UserProviderContext } from "@/lib/context/user-context";
import { PropsWithChildren, useMemo, useState } from "react";

export type UserProviderProps = PropsWithChildren;

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserProviderContext.Provider value={value}>
      {children}
    </UserProviderContext.Provider>
  );
};

export default UserProvider;
