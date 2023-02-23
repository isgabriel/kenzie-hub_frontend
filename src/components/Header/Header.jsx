import { Logo } from "../Logo/Logo";
import { HeaderContainer } from "./style";

export function Header({ children }) {
    return (
        <HeaderContainer>
            <Logo />
            {children}
        </HeaderContainer>
    );
}
