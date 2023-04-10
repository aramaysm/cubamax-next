import styles from "@/styles/Home.module.css";

export function Footer() {
  return (
    <div className={styles.banner_jobs + " container-fluid  pt-5 pb-3 "}>
      <div className="row justify-content-center d-flex align-content-center">
        <div className="col-lg-8 col-12 col-sm-12 ">
          <div className="row justify-content-between d-flex align-content-between">
            <div className="col-lg-6 col-12 col-sm-12 text-center text-lg-start">
              <p>Términos y condiciones de política de privacidad</p>
            </div>
            <div className="col-lg-6 col-12 col-sm-12 text-center text-lg-start">
              © Cubamax 2022. Todos los derechos reservados
            </div>
            <div className="col-lg-6 col-12 col-sm-12 text-center text-lg-start mt-2">
              designed by rodriguez valle creative
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
