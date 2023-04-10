import { CardProps } from "@/interfaces";
import styles from "@/styles/Home.module.css";
import { IconButton } from "../atoms/IconButton";

export function Banner_Habana({ title, description }: CardProps) {
  return (
    <>
      <div
        className={
          styles.banner2_habana +
          " container-fluid mb-3 mt-5 justify-content-lg-start d-flex align-content-lg-start justify-content-center d-flex align-content-center"
        }
      >
        <div className="col-lg-4 col-11 col-sm-11 ">
          <div className={styles.card_visit_cuba + " card bg-warning m-4 "}>
            <div className="card-header border-none transparent">
              <h3>
                {title}
                <small>{description}</small>
              </h3>
            </div>
            <div className="card-body">
              <IconButton
                onClick={() => alert("Presionaste el botón sobre las visitas")}
                label={
                  "https://img.icons8.com/fluency-systems-regular/48/null/right-squared.png"
                }
                color={""}
                disabled={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
