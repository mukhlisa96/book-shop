// let productsInCart = JSON.parse(localStorage.getItem('ShoppingCart'));
// if(!productsInCart){
//     productsInCart = [];
// }
// const parentElement = document.querySelector("#buyItems");
// const cartSumPrice = document.querySelector("#sum-prices");
// const products = document.getElementById("#book-card");


// console.log(products);

// const countSumPrice = function(){
//     let sumPrice = 0;
//     productsInCart.forEach(product => {
//         sumPrice += product.price;
//     });
//     return sumPrice;
// }

// const updateShoppingCartHTML = function(){
//     localStorage.setItem('ShoppingCart', JSON.stringify(productsInCart));
//     if (productsInCart > 0) {
//         let result = productsInCart.map(product => {
//             // var cartContainer = document.createElement('div');
//             // cartContainer.innerHTML = 'this is my cart';
//             // mainContainer.appendChild()

//             return `${product.name}, ${product.price}, ${product.image}, ${product.id}, ${product.count}`;

//         });

//         parentElement.innerHTML = result.join('');
//         document.querySelector('.checkout').classList.remove('hidden');
//         cartSumPrice.innerHTML = "$ " + countSumPrice();
//     } else {
//         document.querySelector('.checkout').classList.add('hidden');
//         parentElement.innerHTML = '</h4>No books added</h4>';
//         cartSumPrice.innerHTML = "";
//     }
// }


// function updateProductsInCart(product){

//     for(let i=0; i<productsInCart.length; i++){
//         if(productsInCart[i].id == product.id){
//             productsInCart[i].count += 1;
//             productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
//             return;
//         }

//     }

//     productsInCart.push(product);

// }
//  products.forEach(product =>{
//     product.addEventListener('click', (e) => {
//         if(e.target.classList.contains('addToCart') ){
//             const productID = e.target.dataset.productId;
//             const productName = product.querySelector('.productName').innerHTML;
//             const productPrice = product.querySelector('.productPrice').innerHTML;
//             const productImage = product.querySelector('.bookImg').src;

//             let productToCart = {
//                 name: productName,
//                 image: productImage,
//                 id: productID,
//                 count: 1,
//                 price: +productPrice,
//                 basePrice: productPrice
//             }
//             updateProductsInCart();
//             updateShoppingCartHTML(); 
//         }
//     })
// });  

// parentElement.addEventListener('click', (e) => {
//     const isPlusButton = e.target.classList.contains('button-plus');
//     const isMinusButton = e.target.classList.contains('button-minus');

//     if(isPlusButton || isMinusButton){
//         for(let i = 0; i < productsInCart; i++){
//             if(isPlusButton){
//                 productsInCart[i].count += 1;
//             }else if(isMinusButton){
//                 productsInCart[i].count -= 1;

//             }
//             productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
//         }
//         if(productsInCart[i].count <= 0){
//             productsInCart.splice(i, 1);
//         }
//     }
//     updateShoppingCartHTML();
// });

//     updateShoppingCartHTML();




