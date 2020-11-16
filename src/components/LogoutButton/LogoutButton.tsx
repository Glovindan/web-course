import React from "react"
import { NavLink } from "react-router-dom"

type MenuButtonProps = {
  className?: string;
  text: string;
  onClick: () => void;
}

const LogoutButton = (props: MenuButtonProps): React.ReactElement => {
  const {className, text, onClick} = props;

    return(
        <button
            className={className} 
            type="button"
            onClick={onClick}
        >{text}</button>
    )
};

export default LogoutButton;
