import styles from "@/styles/Home.module.css";
import ImgSlogan from "@/resources/Slogan.png";
import Image from "next/image";
import icons_socialmedia from "@/resources/icons_contacts";

export function Banner_Contacts() {
  return (
    <div
      className={
        styles.banner_jobs +
        " container-fluid justify-content-center d-flex align-content-center pt-5 pb-3 row"
      }
    >
      <div className="col-lg-10 col-12 col-sm-12 ">
        <div className="row justify-content-center d-flex align-content-center">
          <Image
            className="col-lg-6 col-12 col-sm-12"
            src={ImgSlogan}
            alt={"Slogan"}
          />
        </div>
      </div>
      <div className="col-lg-7 col-12 col-sm-12 mt-4">
        <div className="card transparent border-none">
          <div className="card-header transparent border-none text-center">
            <h6>ENCUENTRANOS EN</h6>
          </div>
          <div className="card-body">
            <div className="row justify-content-between d-flex align-content-between">
              <div className="col-lg-3 col-12 col-sm-12 mt-auto">
                <div className="row">
                  {icons_socialmedia.slice(0, 3).map((item) => (
                    <div className="col-4 " key={item.name}>
                      <img 
                        className="cursor-pointer bg-secondary p-1 rounded-1"
                        src={item.src}
                        alt={item.name}
                        width="40"
                        height="40"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-7 col-12 col-sm-12 mt-auto">
                <div className="row">
                  {icons_socialmedia.slice(3, 9).map((item) => (
                    <div className="col-2 " key={item.name}>
                      <img
                        className="cursor-pointer bg-secondary p-1 rounded-1"
                        src={item.src}
                        alt={item.name}
                        width="40"
                        height="40"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
