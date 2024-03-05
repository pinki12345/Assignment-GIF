class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
      .footer_div {
          height: 100%;
          background-color: black;
        }
        .footer_div img {
          margin-top: 5%;
          width: 15%;
        }
        .footer1 {
          color: #FFDE59;
          font-size: 180%;
          font-family: 'League Spartan', sans-serif;
          font-weight: bold;
          padding: 4%;
          margin-left: 2%;
        }
        .container_footer {
          display: flex;
          justify-content: space-between;
          padding: 1.2% 4.8% 5% 4.8%;
          color: white;
        }
        .left-column {
          flex: 1;
        }
        .right-column {
          flex: 1;
        }
        .left-column a {
          display: block;
          margin-bottom: 10px;
          text-decoration: none;
          color: white;
          margin-left: 3%;
          font-size: 1.5vw;
          font-family: 'Alata', sans-serif;
          line-height: 100%;
        }
        .right-column h2 {
          margin-bottom: 10px;
          font-family: 'Alata', sans-serif;
          color: #FFCA04;
        }
        .right-column a {
          color: white;
        }
        .social-logos img {
          width: 30px;
          margin-right: 10px;
        }
        .social-logos i {
         font-size: 300%;
         padding: 0.7%;
        }
        .fa-linkedin {
          color: #0277B5;
        }
        .fa-square-twitter {
          color: #1B9DF0;
        }
        .abs_div1 {
          display:inline-block;
          font-family: 'Alata', sans-serif;
          color: white;
          font-size:1vw;
          padding: 1vw 0 6vw 5.8vw;
        }
        .abs_div2 {
          display:inline-block;
          font-family: 'Alata', sans-serif;
          color: white;
          font-size:1vw;
          padding: 1vw 0 6vw 30vw;
        }
        .logoimg {
          display:inline-block;
        }
        .reach {
          display:inline-block;
          padding: 0 0 0 64.5vw;
          font-family: 'Alata', sans-serif;
          color: white;
          font-size:1.5vw;
        }
        @media screen and (max-width:600px) {
          .reach {
          display: inline;
          padding: 0;
          font-family: 'Alata', sans-serif;
          color: white;
          font-size: 3.2vw;
          text-align: center;
          }
          .footer_div img {
            margin-top: 5%;
            width: 30%;
          }
          .container_footer {
          display: unset;
          }
          .left-column a{
            font-size: 4vw;
          }
          div.right-column {
              position: relative;
              margin: auto;
              text-align: center;
              padding-top: 10%;
          }
          
          div.right-column h2 {
            margin-bottom: 2px;
            font-family: 'Alata', sans-serif;
            color: #FFCA04;
            font-size: 6vw;
            }
            .social-logos {
                font-size: 2vw;
            }
          div.abs_div1, .abs_div2{
              display: table;
              font-size: 3vw;
              margin: auto;
              padding: 0;
              text-align: center; 
          }
         
        }
      </style>
    <footer>
  <!--footer-->
<div class="footer_div">
<div class="logoimg">
<img src="assets/images/logo.png" alt="logo">
</div>
<div class="reach">
<p>Feel free to reach out with any<br>queries or concerns at:<br><a href="mailto:info@global-investors-forum.com">info@global-investors-forum.com</a><br>We're here to assist you!</p>
</div>
<div class="footer1">
<p>CONNECTING WORLD THROUGH ONE PLATFORM.</p>
</div>
<div class="container_footer">
 <div class="left-column">
   <a href="index.html">HOMEPAGE</a>
   <a href="whoweare.html">WHO WE ARE</a>
   <a href="whatweproduce.html">WHAT WE PRODUCE</a>
   <a href="membership.html">GIF MEMBERSHIP</a>
   <a href="contact.html">CONTACT US</a>
 </div><br>
 <div class="left-column">
   <a href="GAIS/index.html">GAIS</a>
   <a href="GAIS/conference.html">CONFERENCES</a>
   <a href="GAIS/award.html">AWARD CEREMONY</a>
   <a href="GAIS/meet.html">GLOBAL INVESTORS MEET</a>
   <a href="GAIS/contact.html">TICKETS</a>
 </div>
 <div class="right-column">
   <h2>FOLLOW US</h2>
   <div class="social-logos">
      <a href="#"><i class="fa-brands fa-linkedin" style="color: #ffffff;" aria-hidden="true"></i></a>
      <a href="#"><i class="fa-sharp fa-solid fa-m" aria-hidden="true"></i></a>
      <i class="fa-brands fa-square-twitter" style="color: #ffffff;" aria-hidden="true"></i>
      <a href="#"><i class="fa-regular fa-envelope" aria-hidden="true"></i></a>
   </div>
 </div>
</div>
<div class="spacer"></div>
<div class="abs_div1">
<p>GLOBAL INVESTORS FORUM <i class="fa-regular fa-copyright" aria-hidden="true"></i> 2024 ALL RIGHTS RESERVED</p>
</div>
<div class="abs_div2">
<p>PRIVACY POLICY | GENERAL TERMS AND CONDITIONS</p>
</div>
</div>
  </footer>
        `;
      }
    }
    
    customElements.define('footer-component', Footer);