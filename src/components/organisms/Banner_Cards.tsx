import { BannerCardProps } from "@/interfaces";
import Card from "../molecules/Card";
import styles from "@/styles/Home.module.css";

export  function Banner({
  title,
  description,
  cardsArray,
}: BannerCardProps) {
  return (
    <div
      className={
        styles.banner1_services +
        " container-fluid justify-content-center d-flex align-content-center mb-3"
      }
    >
      <div className="col-lg-10 col-12 col-sm-12 ">
        <div className="row justify-content-around d-flex align-content-around">
          {cardsArray.map((card) => (
            <div key={card.title} className="col-lg-3 col-5 col-sm-5 cursor-p ">
              <Card
                title={card.title}
                description={card.description}
                icon={card.icon}
                bgColor={card.bgColor}
                iconColor={card.iconColor}
              />
            </div>
            // eslint-disable-next-line react/jsx-key
          ))}
        </div>
      </div>
    </div>
  );
}
