export default function Header() {
    return (
        <header className="header">
            <a href="https://www.react.dev" target="_blank">
                <img className="icon" src="/src/assets/react.svg" alt="react-logo"/>
            </a>
            <nav>
                <ul className="navlist">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}