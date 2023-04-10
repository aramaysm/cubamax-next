import { ButtonProps } from "@/interfaces/Button.interface";

export default function Button({
  onClick,
  label,
  color,
  disabled,
  icon,
}: ButtonProps) {
  return icon !== undefined ? (
    <button className={"button-" + color} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  ) : (
    <div className={"row button-"+color} onClick={onClick} >
      <div className="col-2">
        <img src={icon} width="20"  height="20"/>
      </div>
      <div className="col-10 justify-content-center d-flex align-items-center">{label}</div>
    </div>
  );
}
