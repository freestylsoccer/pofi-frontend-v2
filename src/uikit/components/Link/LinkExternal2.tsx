import React from "react";
import Link from "./Link";
import { LinkProps } from "./types";

const LinkExternal2: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link external {...props}>
      {children}      
    </Link>
  );
};

export default LinkExternal2;
