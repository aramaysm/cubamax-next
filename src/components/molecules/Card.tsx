import { CardProps } from "@/interfaces";
import Image from "next/image";



export default function Card({ title, description, icon,bgColor,iconColor,onClick }: CardProps): JSX.Element {
  return (
        <div className={"card card-hover m-lg-4  mt-4 border-secondary rounded-4 bg-" + bgColor}
        onClick={onClick}>
            <div className="card-header border-none transparent text-center">
               <Image src={icon} className={"fs-icon"} alt={title} />
            </div>
            <div className="card-body text-center">
                <h4 className="text-secondary">{title}</h4>
            </div>           
           
        </div>
    
    )
}
