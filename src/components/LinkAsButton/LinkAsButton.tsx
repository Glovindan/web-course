import React from 'react';
import {Link, NavLink, NavLinkProps} from "react-router-dom";
import cn from 'clsx';

type LinkAsButtonProps = NavLinkProps & {
  to: string;
  children: React.ReactNode;
  as?: React.ElementType | NavLink | Link,
  className?: string;
}

const LinkAsButton = (props: LinkAsButtonProps): React.ReactElement => {
  const { as = Link, to, children, className, ...linkProps } = props;

  const Element = as;

  return (
    <Element className={cn(className)} to={to} { ...linkProps }>
      {children}
    </Element>
  );

};

export default LinkAsButton;
