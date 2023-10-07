import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
      <FooterContainer className="main-footer">
        <div className="footer-middle">
          <div className="container">
            <div className="row">

            <div className="col-md-3 col-sm-6 mx-auto">
            <ul className="list-unstyled">
                <li><img src='./public/patitas_logo.png'width={'120'} alt="" ></img></li>
                </ul>
            </div>

              <div className="col-md-3 col-sm-6 mx-auto">
                <h4>Veterinaria Patitas</h4>
                <ul className="list-unstyled">
                  <li><a href="/"> Acerca de Nosotros</a></li>
                  <li>telefono de contacto - 0800-Martin-Conty-555</li>
                  <li><a href="/">Ubicacion</a></li>
                  <li>correo-electronico@patitas.com</li>
  
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 mx-auto">
                <h4>redes sociales</h4>
                <ul className="list-unstyled">
                <li><a href="/" ><i className="bi bi-facebook"></i></a>Facebook</li>
                <li><a href="/" ><i className="bi bi-instagram"></i></a>Instagram</li>
                <li><a href="/" ><i className="bi bi-twitter"></i></a>Twitter</li>
                <li><a href="/" ><i className="bi bi-tiktok"></i></a>Tik-Tok</li>
                </ul>
              </div>
            </div>
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
    background: var(--mainDrark);
    padding-top: 3rem;
    color: var(--maingreen);
  }
  
  ul li a {
  colo: var(--mainfount);
  }
  
  ul li a:hover {
    color: var(--maingreen);
  
  `;