import React from "react"
import { NavLink } from "react-router-dom"

type MenuButtonProps = {
  className?: string;
  href: string;
  text: string;
}

const HeaderMenuButton = (props: MenuButtonProps): React.ReactElement => {
  const {className, href, text} = props;

  return (
    <NavLink className={className} to={href}>
      {text}
    </NavLink>
  );
};

export default HeaderMenuButton;
