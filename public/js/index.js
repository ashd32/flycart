$(document).ready(function(){
let productArray = [];
let shoppingCart = [];


// render function to display data
function render(merch) {
    for(let i = 0; i < merch.length; i++){
        $('#searchDump').append(
            `<h2>Item: ${merch[i].product_name}</h2><h3>Department: ${merch[i].department_name}
            </h3><h3>Price: $${merch[i].price}</h3><h5># Available: ${merch[i].stock_quantity}</h5>
            <h5>Product ID: ${merch[i].id}</h5>`);
    };
};


// function that captures user input to search for merch
function searchMerch() {
    $.get(`/api/products`)
    .then(function (merch) {
        // console.log(merch);
        productArray = merch.slice();
        render(merch);
    })
};

searchMerch();

  $('#userPurchase').submit(function(event){
    event.preventDefault();
    console.log(productArray);
  const productId = parseInt($('#productId').val())
  const productQuantity = parseInt($('#productQuantity').val());
  let merchStock = 0;

  // identifies correct product
for(let i=0; i< productArray.length; i++){
    if(productId === productArray[i].id){
        // checks if quantity is sufficient
       if(productQuantity <= productArray[i].stock_quantity){
        // merchStock = productArray[i].stock_quantity - productQuantity;
        // console.log("Items are available!");
        const id = productArray[i].id;
        const product_name = productArray[i].product_name;
        const price = productArray[i].price;
        const stock_quantity = productArray[i].stock_quantity;
        shoppingCart.push({id:id, product_name:product_name, product_quantity:productQuantity, price:price, stock_quantity:stock_quantity})  // holds value user selected
        alert(productArray[i].product_name + ' was added to your shopping cart!')
       } else {
           alert("Items are out of stock");
       }
    }
}

  console.log(productId, merchStock);  
})

// listener for shopping cart array
$("#shopping-cart").click(function(event){
    event.preventDefault();
    if(shoppingCart.length === 0){
        alert('Your shopping cart is empty')
    }else {
        console.log(shoppingCart);
    $('.modal').css('display', 'block') // changes modal to display
    }
})
$('.close').click(function(){
    $('.modal').css('display', 'none') // changes modal to close
})
});
