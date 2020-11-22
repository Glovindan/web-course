import React from "react"
import { NavLink } from "react-router-dom"

type LogoutButtonProps = {
  className?: string;
  text: string;
  onClick: () => void;
}

const LogoutButton = (props: LogoutButtonProps): React.ReactElement => {
  const {className, text, onClick} = props;

    return(
        <NavLink className={className} onClick={onClick} to="#">
          {text}
        </NavLink>
    )
};

export default LogoutButton;
