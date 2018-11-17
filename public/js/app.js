$(document).ready(function () { //AP: Wrapped the entire app.js in document.ready
    console.log('i am here')
    var productArray = [];
    // render function to display data
    const render = function (gear) {
        for (let i = 0; i < gear.length; i++) {
            $('#searchDump').append(`<h2>Product Name: ${gear[i].product_name}</h2><h3>Price: $${gear[i].price}</h3><h6># Available: ${gear[i].stock_quantity}</h6>`);
        };
    };
    // function that captures user input to search for gear
    const searchGear = function () {
        event.preventDefault();
        console.log('i am here!')
        const product_name = $('.searchKeyWord').val()
        console.log('product: ', product_name)

        $.get(`/api/products`)
            .then(function (gear) {
                console.log(gear);
                productArray = gear.slice();
                render(gear);
            })
    };

    const postGear = function (e) {
        e.preventDefault();

        var productName = $('.productName').val().trim();
        var productQuantity = $('.productQuantity').val().trim();

        // $.post('/api/products', newGear)
        // .then(function (gear) {   
        // });
        var customerProduct;
        for (let i = 0; i < productArray.length; i++) {

            if (productArray[i].id === parseInt(productName)) {
                customerProduct = productArray[i]
            }
        }
        console.log(customerProduct);
    };

    $('#searchProduct').submit(postGear);


    searchGear();
});