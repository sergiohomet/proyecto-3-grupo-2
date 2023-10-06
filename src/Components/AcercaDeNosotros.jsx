import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Components/AcercaDeNosotros.css";

const AcercaDeNosotros = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="col-12 text-center">
            <h1 className="title fw-bold py-4">¿Quienes Somos?</h1>
            <p>
              Somos estudiantes, aprendices en crecimiento constante con
              compromiso a seguir trabajando en esta área que nos apasiona.
              reconocemos que el mundo de la programación esta en continua
              evolución e innovación y creemos que siempre hay algo nuevo por
              indagar y por ende, adquirir nuevas habilidades técnicas. Somos un
              equipo diverso, hemos aprendido a transmitir nuestros distintos
              puntos de vista de manera afectiva y escuchar activamente la
              perspectiva de los demás por lo que hemos intentado superar
              desafíos que nos han enriquecido y fortalecido para afrontar
              obstáculos a futuro.
            </p>
            <p>
              A lo largo de este proyecto colaborativo, se vió el enorme
              esfuerzo y la dedicación de cada miembro del equipo, el tiempo
              empleado en cada detalle como así también, la buena predisposición
              a colaborar con el otro y apoyarnos mutuamente en cada paso,
              dispuestos a seguir mejorando y a seguir sumando experiencias!
            </p>
            <h2 className="py-2">Conocé a nuestro equipo de Trabajo</h2>

            <div className="row row-cols-md-2 row-cols-lg-3 row-cols-1 card-container py-3">
              <div className="col mb-4">
                <div className="card">
                  <img src="./src/assets/fran.png" alt=""></img>
                  <div className="card-body">
                    <h4 className="card-title">Francisco Vicente</h4>
                    <p className="card-text">Back-End</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <img src="./src/assets/gonzalo.png" alt=""></img>
                  <div className="card-body">
                    <h4 className="card-title">Gonza Hurtado</h4>
                    <p className="card-text">Front-End</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <img src="./src/assets/sergio.png" alt=""></img>
                  <div className="card-body">
                    <h4 className="card-title">Sergio Hommet</h4>
                    <p className="card-text">Back-End</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <img src="./src/assets/ulises.png" alt=""></img>
                  <div className="card-body">
                    <h4 className="card-title">Ulises Burgos</h4>
                    <p className="card-text">Front-End</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <img src="./src/assets/cyn.png" alt=""></img>
                  <div className="card-body">
                    <h4 className="card-title">Cynthia Pistán</h4>
                    <p className="card-text">Front-End</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-list py-4">
              <ul className="fw-semibold list-unstyled">
                Visitanos en:
                <li>
                  <i className="bi bi-geo-alt-fill"></i>Gral. Paz 576 T4000 (San
                  Miguel de Tucumán)
                </li>
                <li>
                  <i className="bi bi-telephone"></i>Teléfono: (0381) 421-xxx
                </li>
                <li>
                  <i className="bi bi-pin-angle-fill"></i>Horario: Lunes –
                  Viernes: 10:00hs – 19:00hs.
                </li>
              </ul>
              <div
                className="embed-responsive embed-responsive-16by9"
                style={{ width: "100%", height: "50%" }}
              >
                <iframe
                  className="embed-responsive w-100 py-3"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.118032695615!2d-65.2096526251278!3d-26.836197890010112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0e8d0271b7%3A0x7946062ac490db30!2sGral.%20Paz%20576%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1696312605922!5m2!1ses!2sar"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcercaDeNosotros;
