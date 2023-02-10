import { Logo } from "../Logo/Logo";

export function Header({ children }) {
    return (
        <header>
            <Logo />
            {children}
        </header>
    );
}
