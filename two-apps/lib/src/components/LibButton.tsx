import "./LibButton.css";
export default function Button({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <button className="LibButton" onClick={onClick}>
      {label}
    </button>
  );
}
