import React from "react"

type MenuButtonProps = {
  className?: string;
  href: string;
  text: string;
}

const MenuButton = (props: MenuButtonProps): React.ReactElement => {
  const {className, href, text} = props;

  return (
    <a className={className} href={href}>
      {text}
    </a>
  );
};

export default MenuButton;
