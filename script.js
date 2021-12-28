const showMenu =(toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(toggle && nav){
        nav.classList.toggle('show-menu')
        }
    }
showMenu('nav-menu', 'nav-toggle')


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
                            <li class="nav_item"><a href="pages.html" class="nav_link">Payment</a></li>
                            <li class="nav_item"><a href="indexDonate.html" class="nav_link">Donations</a></li>
                            <li class="nav_item"><a href="events.html" class="nav_link">Events</a></li>
                            <li class="nav_item"><a href="blog.html" class="nav_link">Blog</a></li>
                            <li class="nav_item"><a href="shop.html" class="nav_link">Shop</a></li>
                            <!-------Dropdown menu------->
                            <div class="dropdown">
                                <div class="nav_tog">
                                    <div class="bar b1" id="bar1"></div>
                                    <div class="bar b2" id="bar2"></div>
                                    <div class="bar b3" id="bar3"></div>
                                </div>
                                <ul class="dropdown_contents">
                                    <li class="dropdown_menu"><a href="about.html" class="nav_link">About us</a></li>
                                    <li class="dropdown_menu"><a href="#" class="nav_link">Our Team</a></li>
                                    <li class="dropdown_menu"><a href="branch.html" class="nav_link">Branches</a></li>
                                </ul>
                            </div>
                            <li class="nav_item"><a href="checkout.html" class="nav_link"><i class="icofont-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <!---------Menu bars-------->
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


class secondHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `
            <header class="header_wrap" id="header">
                <div class="top_navbar">
                    <div class="top_right">
                        <p>Follow us
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                            <i class="fa fa-facebook-f" aria-hidden="true"></i>
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </p>
                    </div>
                    <div class="top_left">
                        <p>Call us: +234 70 433 2832</p>
                    </div>
                </div>
                <hr>
                <!-- navigation menu -->
                <nav class="nav_bar nav_alt">
                    <!------<a href="#" class="nav_logo"><img src="images/KWLClogo.svg" alt="KWLC Logo"></a>--------->

                    <!----------Navigation Links--------->
                    <div class="nav_menu" id="nav-menu">
                        <ul class="nav_list nav-list">
                            <li class="nav_item"><a href="indexDonate.html" class="nav_link"><button class="btn"> <i class="fa fa-gift" aria-hidden="true"></i>Donate</button></a></li>
                            <li class="nav_item"><a href="index.html" class="nav_link">Home</a></li>
                            <li class="nav_item"><a href="payment.html" class="nav_link">Payment</a></li>
                            <li class="nav_item"><a href="indexDonate.html" class="nav_link">Donations</a></li>
                            <li class="nav_item"><a href="home.html" class="nav_link"><img src="images/KWLClogo.svg" alt="KWLC Logo"></a></li>
                            <li class="nav_item"><a href="events.html" class="nav_link">Events</a></li>
                            <li class="nav_item"><a href="blog.html" class="nav_link">Blog</a></li>
                            <li class="nav_item"><a href="shop.html" class="nav_link">Shop</a></li>
                            <!-------Dropdown menu------->
                            <div class="dropdown">
                                <div class="nav_tog">
                                    <div class="bar b1" id="bar1"></div>
                                    <div class="bar b2" id="bar2"></div>
                                    <div class="bar b3" id="bar3"></div>
                                </div>
                                <ul class="dropdown_contents">
                                    <li class="dropdown_menu"><a href="about.html" class="nav_link">About us</a></li>
                                    <li class="dropdown_menu"><a href="#" class="nav_link">Our Team</a></li>
                                    <li class="dropdown_menu"><a href="branch.html" class="nav_link">Branches</a></li>
                                </ul>
                            </div>
                            <li class="nav_item"><a href="search" class="nav_link txt_white"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                            <li class="nav_item"><a href="checkout.html" class="nav_link"><i class="icofont-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <!---------Menu bars-------->
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

customElements.define('second-header', secondHeader)

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
                    <h4 class="section_subtitle">Contact Us</h4>
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
                    <h4 class="section_subtitle">Up coming Events</h4>
                </div>

                <div class="contact_col">
                <h4>Wedding</h4>
                <span class="contact_span">July 7 @ 8:00 am - 10:30 am</span>
                </div>
                <div class="contact_col">
                    <h4>Wedding</h4>
                    <span class="contact_span">July 7 @ 8:00 am - 10:30 am</span>
                </div>
                <div class="contact_col">
                    <h4>Wedding</h4>
                    <span class="contact_span">July 7 @ 8:00 am - 10:30 am</span>
                </div>
            </div>

            <div class="footer_col">
                <div class="footer_header">
                    <h4 class="section_subtitle">Follow Us</h4>
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



