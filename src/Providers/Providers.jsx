import { TechProvider } from "./TechContext/TechContext";
import { UserProvider } from "./UserContext/UserContext";

export function Providers({ children }) {
    return (
        <UserProvider>
            <TechProvider>{children}</TechProvider>
        </UserProvider>
    );
}
