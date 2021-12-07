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
                            <li class="nav_item"><a href="dponations.html" class="nav_link">Donations</a></li>
                            <li class="nav_item"><a href="event.html" class="nav_link">Events</a></li>
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
                                        <li class="dropdown_menu"><a href="#" class="nav_link">Branches</a></li>
                                        <li class="dropdown_menu"><a href="#" class="nav_link">Payment page</a></li>
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


//Dropdown Menu
// function myFunction() {
//     document.getElementById("dropdown-contents").classList.toggle("show");
// }

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.dropdown')) {
//       var dropdowns = document.getElementsByClassName("dropdown_contents");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }