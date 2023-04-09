import { ButtonProps } from "@/interfaces/Button.interface";


export default function Button({ onClick, label, color, disabled }:ButtonProps) {
  return (
    <button
      className={"button-"+color}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}