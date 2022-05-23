var mainContainer = document.querySelector('.container');

//nav

var shoppingCart = document.createElement("div");
shoppingCart.classList.add('shopping-cart');

var nav = document.createElement("nav");
nav.classList.add('nav');

var logo = document.createElement('h2');
logo.classList.add('logo');
logo.innerHTML = 'BookShop';

var sumPrices = document.createElement('div');
sumPrices.classList.add('sum-prices');


var shoppingCartBtn = document.createElement('div');
shoppingCartBtn.classList.add('shoppingCartButton');

var cartImg = document.createElement('img');
var cartContainer = document.createElement('div');
cartContainer.setAttribute('id', `cart-container`);
cartImg.src = 'assets/images/icons/bag-icon.png';
cartImg.classList.add('cart-img');

var sumPriceHeading = document.createElement("div");
sumPriceHeading.setAttribute('id', 'sum-prices');


shoppingCartBtn.appendChild(cartImg);
sumPrices.appendChild(shoppingCartBtn);
sumPrices.appendChild(sumPriceHeading);
shoppingCart.appendChild(sumPrices);





// <div class="shopping-cart">
//     <div class="sum-prices">
//         <!--Shopping cart logo-->
//         <div class="shoppingCartButton">
//         <img class="cart-img" src="assets/images/icons/bag-icon.png">
            // </div>
//         <h6 id="sum-prices"></h6>
//     </div>
// </div>

nav.appendChild(logo);

nav.appendChild(shoppingCart);

//banner
var banner = document.createElement('div');
banner.classList.add('banner');

var bannerImg = document.createElement('img');
bannerImg.src = 'assets/images/banner.jpg';
bannerImg.classList.add('banner-img');
banner.append(bannerImg);

var bannerTitle = document.createElement('h1');
bannerTitle.classList.add('banner-title');
bannerTitle.innerHTML = 'Welcome to amazing book Shop!';
mainContainer.append(bannerTitle);

banner.appendChild(bannerImg);
banner.appendChild(bannerTitle);





mainContainer.append(nav);
mainContainer.append(banner);

