import "./header.component.css";

interface HeaderProps {
  title: string;
  icon: string;
}

export default function Header({ title, icon }: HeaderProps) {
  return (
    <div className="header-container">
      <h2 className="header">{title}</h2>
      <img className="header-icon" src={icon} alt="icon" />
    </div>
  );
}
