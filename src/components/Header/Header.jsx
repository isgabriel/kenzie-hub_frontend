import { HeaderContainer } from "../../styles/Container/Container";
import { Logo } from "../Logo/Logo";

export function Header({ children }) {
    return (
        <HeaderContainer>
            <Logo />
            {children}
        </HeaderContainer>
    );
}
