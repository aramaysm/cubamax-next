import { ButtonProps } from "@/interfaces";
import Image from "next/image";

export function IconButton({ label, outlined, color, onClick }: ButtonProps) {
  return (
    <>
      <div className=" justify-content-center d-flex align-content-center transparent text-center cursor-p" onClick={onClick}>
        <img  width="50" height="50" src={label} alt="Icon" />
      </div>
    </>
  );
}
