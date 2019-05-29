import React from 'react';


// Components
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

// Styling
import './Home.scss';

// Material UI
import { TextField } from '@material-ui/core';

// IMAGES //

// BRAND IMAGES //
import NorthStar from '../Images/brands/NorthStar.png';
import GenTec from '../Images/brands/GenTec.png';
import LixX from '../Images/brands/LixX.png';
import GenRock from '../Images/brands/GenRock.png';
import Gen20 from '../Images/brands/Gen20.png';
import SunMight from '../Images/brands/SunMight.jpg';
import PlioGrip from '../Images/brands/PlioGrip.jpg';
import Anest from '../Images/brands/Anest.jpg';
import USC from '../Images/brands/USC.jpg';
import AutomotiveArt from '../Images/brands/Automotive-Art.png';
import AFI from '../Images/brands/AFI.png';
// // 

// DIVIDER IMAGES //
import car1 from '../Images/oldcar1.jpg';
import car2 from '../Images/oldcar2.jpg';
import car3 from '../Images/oldcar3.jpg';


const Home = (props) => {
  return (
    <div>
      <Header />
      <div className="home">

        <div className="top">
          <div className="banner">
            <span className="title">WELCOME TO AFI</span>
            <div className="info">
              <span><i class="fas fa-phone"></i>(801) 990-7360</span>
              <span><i class="far fa-envelope"></i>info@afipaintsupply.com</span>
            </div>
            <div class="arrow bounce">
              <h4>See Our Products</h4>
              <a class="fa fa-arrow-down fa-2x" href="#"></a>
            </div>
          </div>
        </div>

        <div className="products">
          <h3 className="section-title">Product Lines</h3>
          <ul>
            <li><img src={NorthStar} alt="brand" /></li>
            <li><img src={GenTec} alt="brand" /></li>
            <li><img src={LixX} alt="brand" /></li>
            <li><img src={GenRock} alt="brand" /></li>
            <li><img src={Gen20} alt="brand" /></li>
            <li><img src={SunMight} alt="brand" /></li>
            <li><img src={PlioGrip} alt="brand" /></li>
            <li><img src={Anest} alt="brand" /></li>
            <li><img src={USC} alt="brand" /></li>
            <li><img src={AutomotiveArt} alt="brand" /></li>
            <li><img src={AFI} alt="brand" /></li>
          </ul>
        </div>

        <div className="divider">
          <img src={car1} alt="car" />
          <img src={car2} alt="car" />
          <img src={car3} alt="car" />
        </div>

        <div className="contact-container">
          <div className="contact">
            <h3 className="section-title">Contact Us</h3>
            <form method="post" name="contact" action="/success" data-netlify="true" netlify-honeypot="bot-field">
              <input
                type="hidden"
                name="form-name"
                value="contact"
              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                margin="normal"
                variant="outlined"
                fullWidth={true}
              />
              <TextField
                required
                id="outlined-required"
                label="Name"
                margin="normal"
                variant="outlined"
                fullWidth={true}
              />
              <TextField
                required
                id="outlined-required"
                label="Message"
                margin="normal"
                variant="outlined"
                multiline={true}
                rows={3}
                rowsMax={5}
                fullWidth={true}
              />
              <ul className="actions">
                <li><button type="reset" value="Reset" className="reset">Reset</button></li>
                <li><button type="submit" value="Send Message" className="submit">Send Message</button></li>
              </ul>
            </form>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Home;