$(document).ready(function(){ //AP: Wrapped the entire app.js in document.ready
    console.log('i am here')
    var productArray = [];
  // render function to display data
    const render = function (gear) {
        for(let i = 0; i < gear.length; i++){
            $('#searchDump').append(`<h2>Product Name: ${gear[i].product_name}</h2><h3>Price: $${gear[i].price}</h3><h6># Available: ${gear[i].stock_quantity}</h6>`);
        };
    };
    // function that captures user input to search for gear
    const searchGear = function() {
        // event.preventDefault();
        // console.log('i am here!')
        // const product_name = $('.searchKeyWord').val()
        // console.log('product: ', product_name)
  
        //AP: $.get doesn't work with the slim version of jQuery in html in line 193
        $.get(`/api/products`)
        .then(function (gear) {
            console.log(gear);
            productArray = gear.slice();
            render(gear);
        })
    };
    // respond to button click
    // $('.searchSubmit').on('click', searchGear);
    // function to post new gear to products table
    const postGear = function (e) {
        e.preventDefault();
       
        var productName = $('.productName').val().trim();
        var productQuantity = $('.productQuantity').val().trim();

        // $.post('/api/products', newGear)
        // .then(function (gear) {   
        // });
        var customerProduct;
        for (let i = 0; i < productArray.length; i++){
            
            if (productArray[i].id === parseInt(productName)) {
                customerProduct = productArray[i]
            }
        }
        console.log(customerProduct);
    };
  
    $('#searchProduct').submit(postGear);
  
    //AP: This shouldn't affect other parts of the code but as you have the
    // searchProduct in form; good to use .submit jQuery method
    searchGear();
  });