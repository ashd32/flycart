$(document).ready(function(){
let productArray = [];


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

for(let i=0; i< productArray.length; i++){
    if(productId === productArray[i].id){
       if(productQuantity <= productArray[i].stock_quantity){
        merchStock = productArray[i].stock_quantity - productQuantity;
        // console.log("Items are available!");
       } else {
           alert("Items are out of stock");
       }
    }
}

  console.log(productId, productQuantity);  
})
});
