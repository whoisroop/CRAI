import React from "react";
import "../css/style.css"
import i1 from "./assets/images/home_baby.png"
import i2 from "./assets/images/logo.svg"
import i3 from "./assets/images/header-shape-2.svg"
import i4 from "./assets/images/baby_1.png"
import i5 from "./assets/images/download-app.png"
import i6 from "./assets/images/download-shape.svg"
import i7 from "./assets/images/app-store.png"
import i8 from "./assets/images/play-store.png"
import i9 from "./assets/images/footer-shape.svg"
import { pink, yellow} from '@mui/material/colors';
import Person from '@mui/icons-material/PersonOutlined';
import Mic from '@mui/icons-material/Mic';
import Schedule from '@mui/icons-material/Event';
import Shop from '@mui/icons-material/Shop';
import Game from '@mui/icons-material/Grade';
import Record from '@mui/icons-material/Done';
import login from '@mui/icons-material/Login';
import Login from "./SignIn";



const Homepage=() => {
  

  function Logout(){
    localStorage.setItem('useremail', "")
    useremail = "Signin"
    localStorage.setItem('babyname', "")
  }

  let useremail = localStorage.getItem('useremail')
  let babyname = localStorage.getItem('babyname')

  if(babyname=="" && babyname==null){
    babyname = "Baby"
  }

  if(useremail!="" && useremail!=null){
    useremail = useremail.split("@")[0]
  }
  else{
    useremail = "Signin"
  }


  
 
 


    return(
        <>
        <>
{/* {localStorage.getItem('babyname')} */}
  {/* {useremail} */}
  <header className="header-area">
    <div className="navbar-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="index.html">
                {/* <img src="assets/images/logo.png" alt="Logo"> */}
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon" />
                <span className="toggler-icon" />
                <span className="toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <ul id="nav" className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="page-scroll" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#about">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#download">
                      App
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#signin" >
                      {useremail}
                    </a>
                  </li>
                  {useremail!="Signin" ?  
                  <li className="nav-item" onClick={Logout}>
                    <a className="page-scroll" href="/" >
                      Logout 
                    </a>
                  </li> : ""}
                </ul>
              </div>{" "}
              {/* navbar collapse */}
            </nav>{" "}
            {/* navbar */}
          </div>
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
    </div>{" "}
    {/* navbar area */}
    <div
      id="home"
      className="header-hero bg_cover d-lg-flex align-items-center"
    >
      <div className="shape shape-1" />
      <div className="shape shape-2" />
      <div className="shape shape-3" />
      <div className="shape shape-4" />
      <div className="shape shape-5" />
      <div className="shape shape-6" />
      <div className="container">
        <div className="row align-items-center justify-content-center justify-content-lg-between">
          <div className="col-lg-6 col-md-10">
            <div className="header-hero-content">
              <h3
                className="header-title wow fadeInLeftBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                <span>LoveLittles</span> <br />{" "}
              </h3>
              <h4>
                <i>No more cries, only smiles!</i>
              </h4>
              <p
                className="text wow fadeInLeftBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.6s"
              >
                Wondering why your little one's crying? <br /> Is it hunger?{" "}
                <br /> Or is it abdomen pain? <br />
                Lets figure out the reason behind the tears...
              </p>
              <ul className="d-flex">
                <li>
                  <a
                    href="https://rebrand.ly/appland-ud"
                    rel="nofollow"
                    className="main-btn wow fadeInLeftBig"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.8s"
                  >
                    Assistance here
                  </a>
                </li>
              </ul>
            </div>{" "}
            {/* header hero content */}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-10">
            <div className="header-image">
              <img
                src={i1}
                alt="app"
                className="image wow fadeInRightBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.5s"
              />
              <div
                className="image-shape wow fadeInRightBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.8s"
              >
                {/* <img src="assets/images/image-shape.svg" alt="shape"> */}
              </div>
            </div>{" "}
            {/* header image */}
          </div>
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
      <div className="header-shape-1" /> {/* header shape */}
      <div className="header-shape-2">
        <img src={i3} alt="shape" />
      </div>{" "}
      {/* header shape */}
    </div>{" "}
    {/* header hero */}
  </header>
  {/*====== HEADER PART ENDS ======*/}
  {/*====== SERVICES PART START ======*/}
  <section id="services" className="services-area pt-110 pb-120">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="section-title text-center pb-25">
            <h3 className="title">What has LoveLittles gotten for you</h3>
            <p className="text">
              LoveLittles is a one-stop solution to all the stress, as you
              nurture your little one.
            </p>
          </div>{" "}
          {/* section title */}
        </div>
      </div>{" "}
      {/* row */}
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div
            className="single-services services-color-1 text-center mt-30 wow fadeInUpBig"
            data-wow-duration="1.3s"
            data-wow-delay="0.2s"
          >
            <div className="services-icon d-flex align-items-center justify-content-center">
              {/* <i className="lni lni-layers" /> */}
              <Mic sx={{ color: yellow[200] }} fontSize="large"/>
            </div>
            <div className="services-content">
              <h4 className="services-title">             
              <a href="/predict">CR(AI) Analysis</a>
              </h4>
              <p className="text">
                Why is your sweet one crying? <br/>Allow us to assist you <br/>figure out the reason behind the tears!
              </p>
            </div>
          </div>{" "}
          {/* single services */}
        </div>
        <div className="col-lg-3 col-sm-6">
          <div
            className="single-services services-color-2 text-center mt-30 wow fadeInUpBig"
            data-wow-duration="1.3s"
            data-wow-delay="0.4s"
          >
            <div className="services-icon d-flex align-items-center justify-content-center">
              {/* <i className="lni lni-layout" /> */}
              < Shop sx={{ color: yellow[200] }} fontSize="large" />
            </div>
            <div className="services-content">
              <h4 className="services-title">
                <a href="https://gostore.app/babyshop" target="blank">Shop for baby essentials</a>
              </h4>
              <p className="text">
                Shop some essentials and baby-care items with us! We offer a wide range of products at affordable rates.
              </p>
            </div>
          </div>{" "}
          {/* single services */}
        </div>
        <div className="col-lg-3 col-sm-6">
          <div
            className="single-services services-color-3 text-center mt-30 wow fadeInUpBig"
            data-wow-duration="1.3s"
            data-wow-delay="0.6s"
          >
            <div className="services-icon d-flex align-items-center justify-content-center">
              {/* <i className="lni lni-bolt" /> */}
              <Game sx={{ color: yellow[200] }} fontSize="large"/>
            </div>
            <div className="services-content">
              <h4 className="services-title">
                <a href="/rhymes">Play <br/> and Learn</a>
              </h4>
              <p className="text">
                Interactive learning games to cheer your little one up. <br/>Combining learning with fun. <br/> Lets play!
              </p>
            </div>
          </div>{" "}
          {/* single services */}
        </div>
        
        <div className="col-lg-3 col-sm-6">
          <div
            className="single-services services-color-4 text-center mt-30 wow fadeInUpBig"
            data-wow-duration="1.3s"
            data-wow-delay="0.8s"
          >
            <div className="services-icon d-flex align-items-center justify-content-center">
              {/* <i className="lni lni-protection" /> */}
              <Record sx={{ color: yellow[200] }} fontSize="large"/>
            </div>
            <div className="services-content">
              <h4 className="services-title">
                <a href="/documents">{babyname}`s documents & health record</a>
              </h4>
              <p className="text">
                Store all medical records and important documents at one place! Keeping everything in check.
              </p>
            </div>
          </div>{" "}
          {/* single services */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
  {/*====== SERVICES PART ENDS ======*/}

  {/*====== ABOUT PART START ======*/}
  <section id="about" className="about-area pt-70 pb-120">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div
            className="about-image mt-50 wow fadeInLeftBig"
            data-wow-duration="1.3s"
            data-wow-delay="0.5s"
          >
            <div className="about-shape" />
            <img className="app" src={i4} alt="app" />
          </div>{" "}
          {/* about image */}
        </div>
        <div className="col-lg-6">
          <div
            className="about-content mt-50 wow fadeInRightBig"
            data-wow-duration="1.3s"
            data-wow-delay="0.5s"
          >
            <div className="section-title">
              <h3 className="title">Know the trio</h3>
              <p className="text">
                We are a team of three - <br /> Roop Kumar Lala : Dhvani Shah :
                Harsh Mavani <br />- IIIT Surat CSE students, <br /> actively
                involved in web development projects.
              </p>
            </div>{" "}
            {/* section title */}
            <a
              href="/team"
              rel="nofollow"
              className="main-btn"
            >
              Know more about the team
            </a>
          </div>{" "}
          {/* about content */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
  {/*====== ABOUT PART ENDS ======*/}

    
  {useremail=="Signin" ? <section id="signin" className="services-area pt-110 pb-120">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="section-title text-center pb-25">
            <h3 className="title">Come, join us!</h3>
            <p className="text">
            Get your little one registered!
            </p>
          </div>{" "}
          {/* section title */}
        </div>
      </div>{" "}
      {/* row */}
      <div className="row">
        <div className="col-lg-6 col-sm-3">
          <div
            className="single-services services-color-2 text-center mt-30 wow fadeInUpBig"
            data-wow-duration="1.3s"
            data-wow-delay="0.2s"
          >
            <div className="services-icon d-flex align-items-center justify-content-center">
              {/* <i className="lni lni-layers" /> */}
              <Person sx={{ color: yellow[200] }} fontSize="large"/>
            </div>
            <div className="services-content">
              <h4 className="services-title">             
              <a href="/signup">SIGNUP</a>
              </h4>
              <p className="text">
                New to the community? <br/> Create a new account now!
              </p>
            </div>
          </div>{" "}
          {/* single services */}
        </div>
        <div className="col-lg-6 col-sm-3">
          <div
            className="single-services services-color-4 text-center mt-30 wow fadeInUpBig"
            data-wow-duration="1.3s"
            data-wow-delay="0.4s"
          >
            <div className="services-icon d-flex align-items-center justify-content-center">
              {/* <i className="lni lni-layout" /> */}
              <Person sx={{ color: yellow[200] }} fontSize="large" />
            </div>
            <div className="services-content">
              <h4 className="services-title">
                <a href="/signin">LOGIN</a>
              </h4>
              <p className="text">
                Login to your account and stay up-to-date with your little one's schedule! 
              </p>
            </div>
          </div>{" "}
          {/* single services */}
          </div>
        </div>
      {/* row */}
    </div>{" "}
    {/* container */}
  </section> : ""}

   {/*====== SIGNINPART ENDS ======*/}
  


















  {/*====== DOWNLOAD PART START ======*/}
  
  {/*====== DOWNLOAD PART ENDS ======*/}
  {/*====== PART START ======*/}
  <footer id="footer" className="footer-area">
    <div className="footer-shape shape-1" />
    <div className="footer-shape shape-2" />
    <div className="footer-shape shape-3" />
    <div className="footer-shape shape-4" />
    <div className="footer-shape shape-5" />
    <div className="footer-shape shape-6" />
    <div className="footer-shape shape-7" />
    <div className="footer-shape shape-8">
      <img className="svg" src={i9} alt="Shape" />
    </div>
    <div className="footer-widget pt-30 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div
              className="footer-about mt-50 wow fadeIn"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              <a className="logo" href="#">
                {/* <img src={i2} alt="Logo" /> */}
                <h1>Infant-Cry</h1>
              </a>
              <p className="text">
                We value your valuable feedback.
              </p>
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="lni lni-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lni lni-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lni lni-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lni lni-linkedin" />
                  </a>
                </li>
              </ul>
            </div>{" "}
            {/* footer about */}
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="footer-link d-flex flex-wrap">
              <div
                className="footer-link-wrapper mt-45 wow fadeIn"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <div className="footer-title">
                  <h4 className="title">Quick Links</h4>
                </div>
                <ul className="link">
                  <li>
                    <a className="" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Features
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Testimonial
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>{" "}
              {/* footer link wrapper */}
              <div
                className="footer-link-wrapper mt-45 wow fadeIn"
                data-wow-duration="1.3s"
                data-wow-delay="0.6s"
              >
                <div className="footer-title">
                  <h4 className="title">Support</h4>
                </div>
                <ul className="link">
                  <li>
                    <a className="" href="#">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Terms Of Use
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Legal
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Site Map
                    </a>
                  </li>
                </ul>
              </div>{" "}
              {/* footer link wrapper */}
            </div>{" "}
            {/* footer link */}
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="footer-contact mt-45 wow fadeIn"
              data-wow-duration="1.3s"
              data-wow-delay="0.8s"
            >
              <div className="footer-title">
                <h4 className="title">Quick Link</h4>
              </div>
              <ul className="contact-list">
                <li>
                  <div className="contact-info d-flex">
                    <div className="info-content media-body">
                      <p className="text">
                        <i className="lni lni-phone" /> 999***999
                      </p>
                    </div>
                  </div>{" "}
                  {/* contact info */}
                </li>
                <li>
                  <div className="contact-info d-flex">
                    <div className="info-content media-body">
                      <p className="text">
                        <a href="#">
                          <i className="lni lni-envelope" /> info@infant-cry.com
                        </a>
                      </p>
                    </div>
                  </div>{" "}
                  {/* contact info */}
                </li>
                <li>
                  <div className="contact-info d-flex">
                    <div className="info-content media-body">
                      <p className="text">
                        <a href="#">
                          <i className="lni lni-world" /> www.infant-cry.com
                        </a>
                      </p>
                    </div>
                  </div>{" "}
                  {/* contact info */}
                </li>
                <li>
                  <div className="contact-info d-flex">
                    <div className="info-content media-body">
                      <p className="text">
                        <i className="lni lni-map" /> IIIT SURAT, Surat, Adajan.
                      </p>
                    </div>
                  </div>{" "}
                  {/* contact info */}
                </li>
              </ul>{" "}
              {/* contact list */}
            </div>{" "}
            {/* footer contact */}
          </div>
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
    </div>{" "}
    {/* footer widget */}
    <div className="footer-copyright">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright d-sm-flex justify-content-between">
              <div className="copyright-text text-center">
                <p className="text">
                  Template Crafted by{" "}
                  <a rel="nofollow" href="https://uideck.com">
                    UIdeck
                  </a>
                </p>
              </div>{" "}
              {/* copyright text */}
              <div className="copyright-privacy text-center">
                <a href="#">Report Issues</a>
              </div>{" "}
              {/* copyright privacy */}
            </div>{" "}
            {/* copyright */}
          </div>
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
    </div>{" "}
    {/* footer copyright */}
  </footer>
  {/*====== PART ENDS ======*/}
  {/*====== BACK TOP TOP PART START ======*/}
  <a href="#" className="back-to-top">
    <i className="lni lni-chevron-up" />
  </a>

</>

        </>
    )

}





export default Homepage;