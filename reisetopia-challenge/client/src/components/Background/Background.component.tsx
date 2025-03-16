import "./background.component.css";
import React from "react";

interface BackgroundProps {
  children: React.ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  return <section className="section">{children}</section>;
};

export default Background;
