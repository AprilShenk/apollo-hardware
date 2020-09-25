import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <footer className="bar">
        <div className="data1">1855 Forced Labor Way</div>
        <div className="data2">
          <img id="logoF" src="https://storage.googleapis.com/p3images/Logos/logo_white_footer.png"></img>
          <p>Copyright</p>
        </div>
        <div className="data3">1(555)382-5347</div>
      </footer>
    </div>
  );
};

export default Footer;