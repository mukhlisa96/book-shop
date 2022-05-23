
let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));
if(!productsInCart){
    productsInCart = [];
}
const parentElement = document.querySelector('#buyItems');
const cartSumPrice = document.querySelector('#sum-prices');
let products;

function closeCart() {
    const cart = document.querySelector('.producstOnCart');
    cart.classList.toggle('hide');
    document.querySelector('body').classList.toggle('stopScrolling')
}


const openShopCart = document.querySelector('.shoppingCartButton');
openShopCart.addEventListener('click', () => {
    const cart = document.querySelector('.producstOnCart');
    cart.classList.toggle('hide');
    document.querySelector('body').classList.toggle('stopScrolling');
});


const closeShopCart = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);

// end-script.js


var mainContainer = document.getElementById("container");

var booksContainer = document.createElement('div');
booksContainer.classList.add('books-container');



fetch('books.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {


              for (var i = 0; i < data.length; i++) {
                // book-card tags
                var div = document.createElement("div");//
                div.classList.add('book-card');


                var h4 = document.createElement("h4");
                h4.classList.add('authorName');

                var h2 = document.createElement("h2");
                h2.classList.add('productName');

                var price = document.createElement("span");
                price.classList.add('productPrice', 'priceValue');

                var currency = document.createElement('span');
                currency.classList.add('currency');
                currency.innerHTML = ' $';

                var costContainer = document.createElement('div');
                costContainer.classList.add('cost-container');

                costContainer.appendChild(price);
                costContainer.appendChild(currency);

                var addToBag = document.createElement("button");
                addToBag.setAttribute('data-product-id', `${i}`);
                addToBag.classList.add('addToCart');

                var showMore = document.createElement("a");
                showMore.setAttribute('data-modal', `modal-${i}`);

                var bookImg=document.createElement('img');
                bookImg.classList.add('bookImg');
                bookImg.setAttribute('alt', data[i].title)
                bookImg.src=data[i].imageLink;
                                


                h4.innerHTML=data[i].author;
                h2.innerHTML=data[i].title;
                price.innerHTML=data[i].price;
                addToBag.innerHTML='Add to Bag';
                showMore.innerHTML='Show more';
                showMore.classList.add('show-more');
                

                div.appendChild(bookImg);
                div.appendChild(h4);
                div.appendChild(h2);
                div.appendChild(costContainer);
                div.appendChild(showMore);
                div.appendChild(addToBag);
                

                booksContainer.appendChild(div);


                // modal tags
                var modalHeading = document.createElement("h2");
                var modalDesc = document.createElement("p");


                modalHeading.innerHTML=data[i].title;
                modalDesc.innerHTML=data[i].description;

                var modal = document.createElement("div");
                modal.classList.add('modal');
                modal.setAttribute('id', `modal-${i}`);


                var modal_bg_exit = document.createElement('div');
                modal_bg_exit.classList.add('modal-bg', 'modal-exit');

                var modalContainer = document.createElement('div');
                modalContainer.classList.add('modal-container');

                var closeBtn=document.createElement('button');
                closeBtn.classList.add('modal-close', 'modal-exit');
                closeBtn.innerHTML='x';
                


             
                modalContainer.appendChild(modalHeading);
                modalContainer.appendChild(modalDesc);
                modalContainer.appendChild(closeBtn);


   modal.appendChild(modal_bg_exit);
                modal.appendChild(modalContainer);
                
                mainContainer.appendChild(modal);
mainContainer.appendChild(booksContainer);

                const modals = document.querySelectorAll('[data-modal]');

                modals.forEach(function (trigger) {
                  trigger.addEventListener('click', function (event) {
                    console.log('modal');
                    event.preventDefault();
                    const modal = document.getElementById(trigger.dataset.modal);
                    modal.classList.add('open');
                    const exits = modal.querySelectorAll('.modal-exit');
                    exits.forEach(function (exit) {
                      exit.addEventListener('click', function (event) {
                        event.preventDefault();
                        modal.classList.remove('open');
                      });
                    });
                  });
                });



              }//for-end
// mainContainer.appendChild(booksContainer);
products=document.querySelectorAll('.book-card');


const countTheSumPrice = function () { // 4
    let sum = 0;
    productsInCart.forEach(item => {
        sum += item.price;
    });
    return sum;
}

const updateShoppingCartHTML = function () {  // 3
    localStorage.setItem('shoppingCart', JSON.stringify(productsInCart));
    // console.log(productsInCart);
    if (productsInCart.length > 0) {
        let result = productsInCart.map(product => {
            console.log(product);
            return `
                <li class="buyItem">
                    <img src="${product.image}">
                    <div>
                        <h5>${product.name}</h5>
                        <h6>$${product.price}</h6>
                        <div>
                            <button class="button-minus" data-id=${product.id}>-</button>
                            <span class="countOfProduct">${product.count}</span>
                            <button class="button-plus" data-id=${product.id}>+</button>
                        </div>
                    </div>
                </li>`
        });
        parentElement.innerHTML = result.join('');
        document.querySelector('.checkout').classList.remove('hidden');
        cartSumPrice.innerHTML = '$' + countTheSumPrice();

    }
    else {
        document.querySelector('.checkout').classList.add('hidden');
        parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
        cartSumPrice.innerHTML = '';
    }
}

function updateProductsInCart(product) { // 2
    for (let i = 0; i < productsInCart.length; i++) {
        if (productsInCart[i].id == product.id) {
            productsInCart[i].count += 1;
            productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
            return;
        }
    }

    productsInCart.push(product);
    // console.log(product);
}

products.forEach(item => {   // 1
    item.addEventListener('click', (e) => {
        if (e.target.classList.contains('addToCart')) {
            const productID = e.target.dataset.productId;
            const productName = item.querySelector('.productName').innerHTML;
            const productPrice = item.querySelector('.priceValue').innerHTML;
            const productImage = item.querySelector('img').src;
            let product = {
                name: productName,
                image: productImage,
                id: productID,
                count: 1,
                price: +productPrice,
                basePrice: +productPrice,
            }
            // console.log(product);
            updateProductsInCart(product);
             // console.log(productsInCart);
            updateShoppingCartHTML();
        }
    });
});

parentElement.addEventListener('click', (e) => { // Last
    const isPlusButton = e.target.classList.contains('button-plus');
    const isMinusButton = e.target.classList.contains('button-minus');
    if (isPlusButton || isMinusButton) {
        for (let i = 0; i < productsInCart.length; i++) {
            if (productsInCart[i].id == e.target.dataset.id) {
                if (isPlusButton) {
                    productsInCart[i].count += 1
                }
                else if (isMinusButton) {
                    productsInCart[i].count -= 1
                }
                productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;

            }
            if (productsInCart[i].count <= 0) {
                productsInCart.splice(i, 1);
            }
        }
        updateShoppingCartHTML();
    }
});

updateShoppingCartHTML();

        })//then-2-end
        .catch(function (err) {
            console.log(err);
        });

