import React from 'react';

import './Footer.scss';

const Footer = (props) => {
  return(
    <div className="footer">
      <div className="info">
        <h3><i className="fas fa-phone"></i>(801) 990-7360</h3>
        <h3><i className="far fa-envelope"></i>info@afipaintsupply.com</h3>
        <h3><i className="fas fa-map-marker-alt"></i>516 W Billinis Rd</h3>
      </div>
      <a href="https://tannerscadden.com/" target="_blank" rel="noopener noreferrer">Designed and created by <p>Tanner Scadden</p></a>
    </div>
  )
}

export default Footer;