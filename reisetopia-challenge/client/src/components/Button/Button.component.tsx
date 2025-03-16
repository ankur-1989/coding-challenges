import "./button.component.css";
interface ButtonProps {
  title: string;
  onClick: () => void;
  className?: string;
}

export default function Button({ title, onClick, className }: ButtonProps) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {title}
    </button>
  );
}
