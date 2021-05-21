import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Details</h2>
            <h4>Bunmee Vang</h4>
            <h4>3201 Heritage Walk Ln</h4>
            <h4>Duluth GA, 30096</h4>
            <h4>(918)527-4704</h4>
            <h4>bunmee.vang@gmail.com</h4>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>BUNS © 2021</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;