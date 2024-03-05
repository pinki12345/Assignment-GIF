class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      .navbar {
        background-color: black !important; 
        font-family: 'Space Grotesk', sans-serif;
        position: fixed;
        width: 100%;
        z-index: 1000;
      }
      .navbar-toggler {
        color: white !important;
      }
      #collapsibleNavbar {
        background-color: black; 
      }
      .navbar-nav {
       text-align: right;
       margin: 0;
       padding: 0;
       font-size: 1.3vw;
       font-weight: lighter;
      }
      .navbar-nav .nav-link {
        color: white !important; /* Set the color of the links in the collapsed navbar to white */
      }
      .navbar-nav .nav-link:hover {
        color: gray !important; 
      }
      .navbar img {
        width: 130px;
        height: auto;
      }
      .navbar a {
        padding-left: 65vw;
      }
      </style>

      <header>
      <!--navbar-->
      <nav class="navbar bg-dark navbar-dark">
       <!-- Brand -->
       <img src="assets/images/gaislogo.png" alt="logo">
       <a href="contact.html"><img src="assets/images/register.png" alt="picture"></a> 
       <!-- Toggler/collapsibe Button -->
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
         <span class="navbar-toggler-icon"></span>
       </button>
         <!-- Navbar links -->
         <div class="collapse navbar-collapse" id="collapsibleNavbar">
           <ul class="navbar-nav">
             <li class="nav-item">
               <a class="nav-link" href="index.html">GAIS</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="conference.html">Conferences</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="award.html">Award Ceremony</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="meet.html">Global Investors Meet</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="contact.html">Tickets</a>
             </li>
           </ul>
         </div>
       </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);