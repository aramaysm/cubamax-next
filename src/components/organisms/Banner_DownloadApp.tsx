import { BannerDownloadAppProps } from "@/interfaces";
import {ImageCel} from "@/resources/";
import Image from "next/image";


export function Banner_DownloadApp({
  title,
  linkAppStore,
  linkGooglePlay,
}: BannerDownloadAppProps) {
  return (
    <div className="container-fluid justify-content-center d-flex align-content-center mt-5">
      <div className="col-lg-10 col-12 col-sm-12 mt-5">
        <div className="row justify-content-around d-flex align-content-around">
          <div className="col-lg-6 col-12 col-sm-12 justify-content-center d-flex align-item-center">
            <div className="card mt-5 border-none">
              <div className="card-header transparent border-none">
                <h3 className="text-secondary text-center text-lg-start">{title}</h3>
              </div>
              <div className="card-body">
                <div className="row justify-content-between d-flex align-content-betweeen">
                  <div className="col-5 ">
                    <div className="row button-outline-secondary">
                      <div className="col-1">
                        <img src="https://img.icons8.com/fluency/48/null/google-play-store-new.png" width="20" height="20" />
                      </div>
                      <div className="col-10 justify-content-center d-flex align-items-center">
                        <a className="text-secondary no-decoration" target="_blank" href={linkGooglePlay}>
                         Para Android
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 ">
                  <div className="row button-outline-secondary">
                      <div className="col-1">
                        <img src="https://img.icons8.com/ios-filled/50/null/mac-os.png" width="20" height="20" />
                      </div>
                      <div className="col-10 justify-content-center d-flex align-items-center">
                      <a className="text-secondary no-decoration" target="_blank" href={linkAppStore}>
                      Para iPhone
                        </a>
                        
                      </div>
                    </div>
               
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 col-sm-12 justify-content-center d-flex align-items-center">
            <Image src={ImageCel} width="325" height="450" alt="Phone"/>
          </div>
        </div>
      </div>
    </div>
  );
}
