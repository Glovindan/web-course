import React from "react"
import { NavLink } from "react-router-dom"

type MenuButtonProps = {
  className?: string;
  href: string;
  text: string;
  onClick?: () => void;
}

const HeaderMenuButton = (props: MenuButtonProps): React.ReactElement => {
  const {className, href, text, onClick} = props;

  return (
    <NavLink className={className} to={href} onClick={onClick}>
      {text}
    </NavLink>
  );
};

export default HeaderMenuButton;
