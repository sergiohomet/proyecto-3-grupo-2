import React from 'react'



const Footer = () => {
    return (
      <div className='main-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-sm-6'>
              <h4>Lorem, ipsum.</h4>
              <ul className='list-unstyled'>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className='col-md-3 col-sm-6'>
              <h4>Lorem, ipsum.</h4>
              <ul className='list-unstyled'>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            
  
          </div>
          {/*boton del footer*/}
          <div className='footer-bottom'>
            <p className='text-xs-enter'>
            &copy;{new Date().getFullYear()}  Esta pagina es del equipo 2
            </p>
          </div>
        </div>
      </div>
      
    )
  }
  
  export default Footer