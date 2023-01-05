import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
          <div className="row">
            {/* <div className="footer__flex"> */}
             <h3 className='footer__title'>©2016-2022 <b> “CS.MONEY”</b> ВСЕ ПРАВА ЗАЩИЩЕНЫ.</h3>
             <p className='footer__text'> CS:GO trading service</p>
             <p className='footer__text'> Конфиденциальность </p>
             <p className='footer__text'> Условия</p>              
            {/* </div> */}
             <div className='footer__right'>
              <p><i className="fa-solid fa-envelope"></i></p>
              <p><i className="fa-brands fa-steam"></i></p>
              <p><i className="fa-brands fa-twitter"></i></p>
              <p><i className="fa-brands fa-vk"></i></p>
              <p><i className="fa-brands fa-discord"></i></p>
             </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer;