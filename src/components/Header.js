/** @format */
import { useLocation } from "react-router";
import Button from "./Button";

const Header = ({ onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className='header'>
      <h1 className='title'>Task Tracker</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          onAdd={onAdd}
          text={showAdd ? " Close" : "Add"}
        />
      )}
    </header>
  );
};

export default Header;
