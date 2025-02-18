import { NavLink } from "react-router-dom";
import "./MenuLink.css";

const MenuLink = ({ children, to }) => {
  return (
    <div className="menuLink">
      <NavLink
        className={({ isActive }) => (isActive ? "link linkDestacado" : "link")}
        to={to}
        end
      >
        {children}
      </NavLink>
    </div>
  );
};

export default MenuLink;
