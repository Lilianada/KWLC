const showMenu =(toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(toggle && nav){
        nav.classList.toggle('show-menu')
        }
    }
showMenu('nav-toggle', 'nav-menu')


// Toggle from straight to cross
function onClickMenu(){
    showMenu('nav-toggle','nav-menu')
    document.getElementById("nav-toggle").classList.toggle("change")
}


//Reusable elements

class myHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `
            <header class="header_wrap" id="header">
                    <!-- navigation menu -->
                <nav class="nav_bar">
                    <a href="#" class="nav_logo"><img src="images/KWLClogo.svg" alt="KWLC Logo"></a>

                    <!----------Navigation Links--------->
                    <div class="nav_menu" id="nav-menu">
                        <ul class="nav_list">
                            <li class="nav_item"><a href="index.html" class="nav_link">Home</a></li>
                            <li class="nav_item"><a href="pages.html" class="nav_link">Pages</a></li>
                            <li class="nav_item"><a href="indexDonate.html" class="nav_link">Donations</a></li>
                            <li class="nav_item"><a href="events.html" class="nav_link">Events</a></li>
                            <li class="nav_item"><a href="blog.html" class="nav_link">Blog</a></li>
                            <li class="nav_item"><a href="shop.html" class="nav_link">Shop</a></li>
                            <li class="nav_item"><a href="cart.html" class="nav_link"><i class="icofont-shopping-cart"></i></a></li>
                            <div class="nav_item">
                                <div class="dropdown">
                                    <div class="nav_tog">
                                        <div class="bar b1" id="bar1"></div>
                                        <div class="bar b2" id="bar2"></div>
                                        <div class="bar b3" id="bar3"></div>
                                    </div>
                                    <input class="drop_input" id="toggle" type="checkbox" checked>
                                    <ul class="dropdown_contents">
                                        <li class="dropdown_menu"><a href="about.html" class="nav_link">About us</a></li>
                                        <li class="dropdown_menu"><a href="#" class="nav_link">Our Team</a></li>
                                        <li class="dropdown_menu"><a href="#" class="nav_link">Our Beliefs</a></li>
                                        <li class="dropdown_menu"><a href="#" class="nav_link">Our Community</a></li>
                                        <li class="dropdown_menu"><a href="branch.html" class="nav_link">Branches</a></li>
                                        <li class="dropdown_menu"><a href="payment.html" class="nav_link">Payment page</a></li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </div>

                    <!-------Menu bars-------->
                    <div class="nav_toggle" onclick="onClickMenu()" id="nav-toggle">
                        <div class="bar b1" id="bar1"></div>
                        <div class="bar b2" id="bar2"></div>
                        <div class="bar b3" id="bar3"></div>
                    </div>
                </nav>
            </header>
        `
    }
}

customElements.define('my-header', myHeader)


class myFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `

        <footer class="footer_container">
            <div class="footer_col col_address">
                <div class="footer_header logo_text">
                    <div class="footer_logo"><img src="images/KWLCLogo.svg" alt="KWLC Logo"></div>
                    <h5 class="section_subtitle">Kingdom Ways Living Church</h5>
                </div>
                <div class="contact_info">
                    <div class="contact_row">
                        <label class="label_icon"><i class="fa fa-phone" aria-hidden="true"></i></label>
                        <p class="contact_text">+ 234 70 433 2832</p> 
                    </div>
                
                    <div class="contact_row">
                        <label class="label_icon"><i class="fa fa-map-marker" aria-hidden="true"></i> </label>
                        <p class="contact_text">24 Prince Ibrahim Eletu Avenue, Shoprite Circle Mall Road Jakande Bus Stop, Osapa London,Lagos</p>
                    </div>
                
                    <div class="contact_row">
                        <label class="label_icon"><i class="fa fa-envelope" aria-hidden="true"></i></label>
                        <p class="contact_text">info@kwlchq.org</p>
                    </div>
                </div>
            </div>

            <div class="footer_col">
                <div class="footer_header">
                    <h4 class="section_title">Contact Us</h4>
                </div>
                <div class="contact_info">
                <form action="">
                    <input type="text" placeholder="Name" id="">
                    <input type="email" placeholder="Email" id="">
                    <textarea placeholder="Message" id="" cols="30" rows="10"></textarea>
                </form>
                <button class="button">Send</button>
                </div>
            </div>

            <div class="footer_col">
                <div class="footer_header">
                    <h4 class="section_title">Up coming Events</h4>
                </div>

                <div class="contact_col">
                <h4>Weeding</h4>
                <span class="contact_span">July 7 @ 8:00 am - 10:30 am</span>
                </div>
                <div class="contact_col">
                    <h4>Weeding</h4>
                    <span class="contact_span">July 7 @ 8:00 am - 10:30 am</span>
                </div>
                <div class="contact_col">
                    <h4>Weeding</h4>
                    <span class="contact_span">July 7 @ 8:00 am - 10:30 am</span>
                </div>
            </div>

            <div class="footer_col">
                <div class="footer_header">
                    <h4 class="section_title">Follow Us</h4>
                </div>
                <div class="contact_info txt_icons">
                <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></p>
                </div>
            </div>
            
        </footer>
        `
    }
}
customElements.define('my-footer', myFooter)



function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "See More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "See Less";
      btnText.style.color = "#77B6D5";
      btnText.style.fontWeight = "700";
      moreText.style.display = "inline";
    }
  }

//   PAYMENT.HTML SCRIPT
  const btn = document.getElementById('donate');
  const closeBtn = document.getElementById('close');
  const closeBtnModal = document.getElementById('close-modal');
  const modal = document.getElementById('modal');
  const overlay = document.getElementById('overlay');
  const successModal = document.getElementById('success__mod  al');
  const submitDonation = document.getElementById('submit-donation');
  const mainContent = document.getElementById('main-content');

  //form
  const form = document.getElementById('form');
  const payForm = document.getElementById('pay-form');

  // show Modal
  btn.addEventListener('click', () => {
      modal.style.display = "block"
      overlay.style.display = "block"
  });

  // hide Modal
  closeBtn.addEventListener('click', () => {
      modal.style.display = "none"
      overlay.style.display = "none"
  });

  // success Modal
  submitDonation.addEventListener('click', () => {
      mainContent.style.display = "none"
      successModal.style.display = "block"
  });

  // hide Modal using continue button
  closeBtnModal.addEventListener('click', () => {
      modal.style.display = "none"
      overlay.style.display = "none"
      mainContent.style.display = "block"
      successModal.style.display = "none"
  })

  form.addEventListener('submit', (e) => {
      e.preventDefault();
  })

  payForm.addEventListener('submit', (e) => {
      e.preventDefault();
  })


//   DONATE.HTML SCRIPT
const btn = document.getElementById('donate');
const closeBtn = document.getElementById('close');
const closeBtnModal = document.getElementById('close-modal');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const successModal = document.getElementById('success__modal');
const submitDonation = document.getElementById('submit-donation');
const mainContent = document.getElementById('main-content');

//form
const form = document.getElementById('form');

// show Modal
btn.addEventListener('click', () => {
    modal.style.display = "block"
    overlay.style.display = "block"
});

// hide Modal
closeBtn.addEventListener('click', () => {
    modal.style.display = "none"
    overlay.style.display = "none"
});

// success Modal
submitDonation.addEventListener('click', () => {
    mainContent.style.display = "none"
    successModal.style.display = "block"
});

// hide Modal using continue button
closeBtnModal.addEventListener('click', () => {
    modal.style.display = "none"
    overlay.style.display = "none"
    mainContent.style.display = "block"
    successModal.style.display = "none"
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
})