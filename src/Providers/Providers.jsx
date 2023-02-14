import { UserProvider } from "./UserContext/UserContext";

export function Providers({ children }) {
    return <UserProvider>{children}</UserProvider>;
}
