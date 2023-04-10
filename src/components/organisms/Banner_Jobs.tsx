import styles from "@/styles/Home.module.css";

export function Banner_Jobs({}) {
  return (
    <div className={styles.banner_jobs +" container-fluid justify-content-center d-flex align-content-center mt-5 pb-3"}>
      <div className="border-secondary rounded-1 col-lg-7 col-12 col-sm-12 mt-5 mb-4">
        <div className="row">
          <div className="col-lg-8 col-12 col-sm-12">
            <div className="card transparent border-none mt-4 mb-4">
              <div className="card-header transparent border-none ">
                <h4 className="fw-bold text-center text-lg-start">¿Buscando trabajo?</h4>
                <p className="fs-5 text-center text-lg-start">Únase a nuestro equipo</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 col-sm-12 justify-content-center d-flex align-items-center">
            <button className="mb-3 button button-secondary">{"SOLICITAR AHORA >"} </button>
          </div>
        </div>
      </div>
    </div>
  );
}
