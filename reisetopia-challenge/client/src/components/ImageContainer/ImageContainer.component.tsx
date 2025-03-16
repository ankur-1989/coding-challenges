import React from "react";
import "./imageContainer.component.css";

interface ImageContainerProps {
  source: string;
  children: React.ReactNode;
}

export default function ImageContainer({
  source,
  children,
}: ImageContainerProps) {
  return (
    <div
      style={{ backgroundImage: `url(${source})` }}
      className="image-container"
    >
      {children}
    </div>
  );
}
