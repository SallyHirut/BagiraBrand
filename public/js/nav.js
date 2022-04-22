
const createAbsoluteNav = function (PhoneNumber, Logo) {
    let nav = document.querySelector('.absolute-nav');
    nav.innerHTML = `
   <div class="absolute-nav-container">
        <section id="burger">
            <div class="burger">
                <span></span>
            </div>
                <div class="phone-icon"><a href ="#"><img src="../images/icons/Phone.svg"/></a></div>
                <div class="phone-number">`+ PhoneNumber + `</div>
        </section>
        <section id="logo">
            <div class="logo-icon"><img src="../images/icons/logo light.svg"/></div>
            <div class="brand-logo">`+ Logo + `</div>
        </section>
        <section id="user-section">
                <div class="cart-icon"><a href ="#"><img src="../images/icons/Cart.svg"/></a></div>
        </section>
   </div>
`;
}
const createNavBar = function (Home, Catalog, About, Contact) {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
   <div class="navbar-container">
            <div class="links-items">
            <div class="link-item"><a href="#" class="link active">`+ Home + `</a></div>
            <div class="link-item"><a href="#" class="link">`+ Catalog + `</a></div>
            <div class="link-item"><a href="#" class="link">`+ About + `</a></div>
            <div class="link-item"><a href="#" class="link">`+ Contact + `</a></div>
   </div>
`;
}
