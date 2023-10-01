import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
             {/*comlumna 1 */}
            <div className="col-md-3 col-sm-6 mx-auto">
              <h4>Veterinaria Patitas</h4>
              <ul className="list-unstyled">
                <li>Acerca de Nosotros</li>
                <li>telefono de contacto</li>
                <li>ubicacion</li>
                <li>correo electronico</li>

              </ul>
            </div>
            {/*columna 2*/}
            <div className="col-md-3 col-sm-6 mx-auto">
              <h4>redes sociales</h4>
              <ul className="list-unstyled">
                <li>facebook</li>
                <li>instagram</li>
                <li>twiter</li>
              </ul>
            </div>
          </div>
          {/*boton del footer*/}
          <div className="footer-bottom">
            <p className="text-xs-enter">
              &copy;{new Date().getFullYear()} Esta pagina es del equipo 2
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};
  
  export default Footer;

  const FooterContainer = styled.footer`        

.footer-middle {
  background: var (--mainDrark);
  padding-top: 3rem;
  color: var(--maingreen);
}

`;