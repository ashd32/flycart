$(document).ready(function(){ 
  console.log('i am here')
  var productArray = [];


// render function to display data
  const render = function (gear) {
      for(let i = 0; i < gear.length; i++){
          $('#searchDump').append(`<h2>Product Name: ${gear[i].product_name}</h2><h3>Price: $${gear[i].department_name}</h3><h3>Price: $${gear[i].price}</h3><h6># Available: ${gear[i].stock_quantity}</h6><h4>Product ID: ${gear[i].id}</h4>`);
      };
  };


  // function that captures user input to search for gear
  const searchGear = function() {
      $.get(`/api/products`)
      .then(function (gear) {
          console.log(gear);
          productArray = gear.slice();
          render(gear);
      })
  };
  

  // function to post new gear to products table
  const postGear = function (e) {
      e.preventDefault();
     
      var productID = $('.productID').val().trim();
      var productQuantity = $('.productQuantity').val().trim();
      var customerProduct;
      for (let i = 0; i < productArray.length; i++){
          
          if (productArray[i].id === parseInt(productID)) {
              customerProduct = productArray[i]
          }
      }
      console.log(customerProduct);
  };

  $('#searchProduct').submit(postGear);

  searchGear();
});


// render function to display data
const render = function (gear) {
  for(let i = 0; i < gear.length; i++){
      $('#searchDump').append(`<h1>${gear[i].product_name}</h1><h4>${gear[i].id}</h4>`);
  };
};


// function that captures user input to search for gear
const searchGear = function (event) {
  event.preventDefault();
  const product_name = $('#searchKeyWord').val()


  $.get(`/api/products/${product_name}`)
  .then(function (gear) {
      console.log(gear);
      render(gear);
  })
};


// respond to button click
$('#searchSubmit').on('click', searchGear);


// function to post new gear to products table
const postGear = function (e) {
  e.preventDefault();
  const newGear = {
      name: $('#keyWord').val()
  };

  $.post('/api/products', newGear)
  .then(function (gear) {   
  });
};

$('#submit').on('click', postGear);