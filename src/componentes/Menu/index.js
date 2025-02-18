import MenuLink from "../MenuLink";
import "./Menu.css";

const Menu = () => {
  return (
    <header className="menu">
      <nav className="navegacao">
        <MenuLink to="/">Início</MenuLink>
        <MenuLink to="/sobremim">Sobre mim</MenuLink>
      </nav>
    </header>
  );
};

export default Menu;
