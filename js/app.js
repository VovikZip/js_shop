(() => {
    'use strict';
    const products = [
        {
            "id": "6318be202dafb88857ced6ef",
            "price": 1758,
            "picture": "https://content.rozetka.com.ua/goods/images/big_tile/196352364.jpg",
            "availableCount": 9,
            "name": "Teapot",
            "description": "Sit ipsum nisi cillum eu excepteur dolore non nulla labore pariatur. Pariatur occaecat ad exercitation labore sint nulla aliqua id. Cupidatat commodo anim culpa cupidatat sint id. Dolore sit laboris minim consequat esse irure tempor commodo. Ex laborum minim qui adipisicing nulla magna et irure anim consectetur culpa fugiat mollit. Consequat cupidatat velit officia velit cillum cillum. Nulla duis Lorem irure dolor magna do incididunt labore pariatur.\r\n"
        },
        {
            "id": "6318be205b25750683803721",
            "price": 2436,
            "picture": "https://content.rozetka.com.ua/goods/images/big_tile/230869196.jpg",
            "availableCount": 5,
            "name": "Teapot",
            "description": "Occaecat fugiat ut reprehenderit culpa minim voluptate. Enim occaecat ad reprehenderit officia irure enim. Ad nisi excepteur nulla laboris sit incididunt sit. Dolore commodo occaecat adipisicing aliqua eiusmod. Sint irure culpa dolore velit nostrud occaecat.\r\n"
        },
        {
            "id": "6318be20b958f314f55a2cfa",
            "price": 3189,
            "picture": "https://content2.rozetka.com.ua/goods/images/big_tile/254566033.jpg",
            "availableCount": 9,
            "name": "Teapot",
            "description": "Culpa eu enim sit cupidatat ipsum anim fugiat irure tempor incididunt pariatur ullamco amet. Ad magna incididunt reprehenderit eiusmod elit quis. Ipsum anim do ex sit voluptate adipisicing velit mollit enim magna cillum. Laborum dolore nulla esse cupidatat. Do laborum veniam id ut commodo quis duis enim elit mollit cillum. Commodo magna ea qui ipsum. Cupidatat id proident labore anim consectetur veniam laboris velit.\r\n"
        },
        {
            "id": "6318be20942c96af2a22fc30",
            "price": 2037,
            "picture": "https://content2.rozetka.com.ua/goods/images/big_tile/11304999.jpg",
            "availableCount": 3,
            "name": "Teapot",
            "description": "Laborum esse aute eu ullamco dolore. Eiusmod sit consectetur mollit ipsum incididunt aliquip ipsum consectetur qui ullamco velit. Aute qui anim qui adipisicing non. Duis exercitation consequat laborum ut nulla reprehenderit nisi cupidatat ex proident excepteur fugiat exercitation.\r\n"
        },
        {
            "id": "6318be20f78d4bc4b1118484",
            "price": 2571,
            "picture": "https://content2.rozetka.com.ua/goods/images/big_tile/250393889.jpg",
            "availableCount": 10,
            "name": "Teapot",
            "description": "Elit laborum proident nostrud commodo minim. Labore ullamco irure anim exercitation dolor culpa duis labore reprehenderit non consectetur. Enim in reprehenderit amet non culpa eiusmod consequat ullamco. Lorem non laboris nostrud consequat nulla labore consectetur esse. Amet labore nostrud pariatur dolor do cillum eu mollit consequat exercitation proident dolor aliqua in. Anim et est est amet aute non. Ad do velit tempor elit et reprehenderit sint cillum cupidatat proident et consectetur.\r\n"
        },
        {
            "id": "6318be200d058394f96faa32",
            "price": 2461,
            "picture": "https://content.rozetka.com.ua/goods/images/big_tile/254034980.jpg",
            "availableCount": 9,
            "name": "Teapot",
            "description": "Irure culpa irure eiusmod officia quis ex aute aute elit adipisicing officia minim ullamco. Dolor sit aliqua est pariatur aliqua. Mollit anim proident voluptate laborum reprehenderit occaecat enim consequat qui laboris. Nulla nostrud officia veniam tempor laboris voluptate dolore voluptate magna. Laboris consequat magna eiusmod ea reprehenderit anim. Nisi deserunt laborum occaecat magna magna deserunt qui deserunt. Amet veniam magna est aliqua ex reprehenderit non ea amet commodo qui minim.\r\n"
        },
        {
            "id": "6318be204295dde104ae26a5",
            "price": 3523,
            "picture": "https://content1.rozetka.com.ua/goods/images/big_tile/254565235.jpg",
            "availableCount": 4,
            "name": "Teapot",
            "description": "Aliquip consectetur pariatur nostrud do fugiat laboris quis. Laboris dolore nulla consectetur reprehenderit ea officia incididunt. Eu adipisicing cupidatat id enim ex eiusmod dolore reprehenderit sint enim nulla deserunt ea minim. Aliqua quis et minim ex sint est aliqua laboris.\r\n"
        },
        {
            "id": "6318be200e26561d690d61a4",
            "price": 1130,
            "picture": "https://content2.rozetka.com.ua/goods/images/big_tile/254846065.jpg",
            "availableCount": 5,
            "name": "Teapot",
            "description": "Qui enim adipisicing proident nostrud eiusmod nisi duis adipisicing officia excepteur. Esse qui veniam fugiat adipisicing do excepteur. Elit est incididunt pariatur aute voluptate anim non dolor voluptate incididunt. Ex incididunt laborum aliqua voluptate. Tempor magna proident proident consectetur dolor dolore ex. Aliqua laborum velit do nostrud magna ipsum elit dolore. Sint laborum magna dolore voluptate occaecat.\r\n"
        },
        {
            "id": "6318be20e6264ff0e640c5b2",
            "price": 1834,
            "picture": "https://content.rozetka.com.ua/goods/images/big_tile/274310137.jpg",
            "availableCount": 4,
            "name": "Teapot",
            "description": "Fugiat aliqua Lorem ad nulla sunt excepteur anim deserunt ullamco ex incididunt eu. Anim culpa sit sunt sit voluptate incididunt laboris deserunt deserunt culpa. Excepteur aliquip ut ipsum excepteur irure eiusmod. Ad deserunt esse magna voluptate consectetur aute exercitation tempor commodo aliqua. Velit ex non ex laboris culpa cupidatat nulla ipsum anim. Eu velit anim esse elit qui aliquip ex nulla mollit duis dolor dolor.\r\n"
        },
        {
            "id": "6318be208862533fb4735214",
            "price": 3435,
            "picture": "https://content.rozetka.com.ua/goods/images/big_tile/152579898.jpg",
            "availableCount": 2,
            "name": "Teapot",
            "description": "Pariatur commodo aute qui eiusmod labore adipisicing amet quis ad in occaecat reprehenderit nisi. Dolor commodo consectetur sit dolore officia et quis nulla aute nulla ut eiusmod Lorem in. Sint ipsum ullamco aliqua mollit ullamco culpa. Reprehenderit reprehenderit fugiat laboris velit commodo aute magna consequat. Laborum sit magna veniam in consequat tempor aliquip ipsum Lorem cupidatat nulla enim.\r\n"
        }
    ];

    const shop = {
        products,
        cart: [],
        addToCart(productId) {
            let btn = document.getElementById(productId)
            btn.addEventListener('click', () => {
                products.map(item => {
                    if (item.id === productId) {
                        if (!this.cart.some(e => e.id === productId)) {
                            this.cart.push(item)
                            this.cart.map( item => {item.quantity = 1})
                        }
                    }
                });
                this.renderCart();
            });
            // TODO: need to implement this method. Find product by id and add it to cart
        },
        removeFromCart(productId) {
            let trash = document.querySelectorAll('.fa-trash-can');
            for (let i = 0; i < trash.length; i++) {
                trash[i].addEventListener('click', (e) => {
                    const target = e.target;
                    for (let j = 0; j < this.cart.length; j++) {
                        if (this.cart[j].id === target.id) {
                            this.cart.splice(j, 1);                    
                        }
                    }
                    this.renderCart();
                })
            }
            // TODO: need to implement this method. remove product from cart by id
        },
        increaseQuantity(productId) {
            let plus = document.querySelectorAll('.plus');
            for (let i = 0; i < plus.length; i++) {
                plus[i].addEventListener('click', (e) => {
                    const target = e.target;
                    if (productId === target.id) {
                        for (let j = 0; j < this.cart.length; j++) {
                            if (this.cart[j].id === target.id && this.cart[j].quantity <= this.cart[j].availableCount - 1) {
                                this.cart[j].quantity++;              
                            }
                        }
                        this.renderCart();
                    }
                })
            }
            // TODO: need to implement this method. increase product quantity in cart
        },
        decreaseQuantity(productId) {
            let minus = document.querySelectorAll('.minus');
            for (let i = 0; i < minus.length; i++) {
                minus[i].addEventListener('click', (e) => {
                    const target = e.target;
                    if (productId === target.id) {
                        for (let j = 0; j < this.cart.length; j++) {
                            if (this.cart[j].id === target.id && this.cart[j].quantity > 1) {
                                this.cart[j].quantity--;              
                            }
                        }
                        this.renderCart();
                    }
                })
            }
            // TODO: need to implement this method. decrease product quantity in cart
        },
        getTotalCart() {
            let sum = 0;
            this.cart.map( item => {
                sum += item.price * item.quantity;
            })
            return sum;
            
          // TODO: need to return total sum in cart
        },
        renderOneProduct(product) {
            let readyProd = document.querySelector('.products');
            readyProd.innerHTML += `
            <li class = "product" >
                <div class = "product__image">
                    <img src = "${product.picture}" alt = "чайник">                
                </div>
                <h3>${product.name}</h3>
                <div class = "price"> $ ${numberWithSpaces(product.price)} </div> 
                <button class = "buy button-filled" id="${product.id}"> Buy </button> 
            </li>
            `;
            // TODO: need to implement this method. render one product in catalog
        },
        renderOneCartProduct(cartProduct) {
            const cartItem = document.createElement('div')
            cartItem.classList.add('cart__cell')
            cartItem.innerHTML = `
                <div class="cart__img">
                    <img src="${cartProduct.picture}">
                </div>
                <div class="cart__title">
                    <div class="cart__left">
                        <div class="cart__name">${cartProduct.name}</div>
                        <div class="cart__count">
                            <button class="minus" id="${cartProduct.id}">-</button>
                            <div class="value">${cartProduct.quantity}</div>
                            <button class="plus" id="${cartProduct.id}">+</button>
                        </div>
                    </div>
                    <div class="cart__right">
                        <div class="cart__delete"><i class="fa-regular fa-trash-can" id="${cartProduct.id}"></i></div>
                        <div class="cart__price">$ ${numberWithSpaces(cartProduct.price * cartProduct.quantity)}</div>
                    </div>
                </div>
            `;
            return cartItem;
            // TODO: need to implement this method. render one product in cart
        },
        renderTotalCart() {
            this.cart.forEach(item => {
                this.removeFromCart(item.id)
            })
            this.cart.forEach(item => {
                this.increaseQuantity(item.id)
            })
            this.cart.forEach(item => {
                this.decreaseQuantity(item.id)
            })
            
            let readyCart = document.querySelector('.cart-total');
            readyCart.innerHTML = `
                <h4>Total: $ ${numberWithSpaces(this.getTotalCart())}</h4>
            `;
            // TODO: need to implement this method. render total in cart
        },
        renderCatalog() {
            // TODO: need to implement this method. render all products. need to use renderOneProduct
            products.map(item => shop.renderOneProduct(item))
            products.forEach(product => this.addToCart(product.id));
        },
        renderCart() {
            const cont = document.querySelector('.cart-content')
            cont.innerHTML = ``;
            this.cart.forEach(item => {
                cont.appendChild(this.renderOneCartProduct(item)) 
            });

            this.renderTotalCart();        
            // TODO: need to implement this method. render cart. need to use renderOneCartProduct and renderTotalCart
        }
    }

    shop.renderCatalog();
    
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
})()