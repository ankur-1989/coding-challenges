import React from "react";
import "./iconButton.component.css";
interface IconButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className: string;
}

export default function IconButton({
  onClick,
  children,
  className,
}: IconButtonProps) {
  return (
    <button className={`${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
