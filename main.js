const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {

    const isAsideClosed =  shoppingCartContainer.classList.contains('inactive')


    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
        }
        
    desktopMenu.classList.toggle('inactive')
}


function toggleMobileMenu() {
    
    const isAsideClosed =  shoppingCartContainer.classList.contains('inactive')


    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
        }

        closeProductDetailAside()

    mobileMenu.classList.toggle('inactive')
}
function toggleCarritoAside() {

    const isProductDetailClosed= productDetailContainer.classList.contains('inactive')



 if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')
    
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive')

    productDetailContainer.classList.remove('inactive')

}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}



const productList = [];

productList.push({
    name: 'Lebron 10',
    price: '120',
    image: 'https://cdn.flightclub.com/TEMPLATE/041820/1.jpg'
})

productList.push({
    name: 'Lebron 12',
    price: '120',
    image: 'https://images.stockx.com/images/Nike-Lebron-12-Instinct.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1623804988&q=75'
})

productList.push({
    name: 'Lebron 13',
    price: '120',
    image: 'https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/nike-lebron-13-hero_waemgp.jpg'
})

/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> 
*/

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price

    const productName = document.createElement('p');
    productName.innerText = product.name

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');

    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_card.svg')


    productInfoFigure.appendChild(productImgCart);


    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo)

    cardsContainer.appendChild(productCard)
}