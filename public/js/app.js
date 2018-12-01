$(document).ready(function(){ 
  console.log('i am here')
  var productArray = [];


// render function to display data
  const render = function (merch) {
      for(let i = 0; i < merch.length; i++){
          $('#searchDump').append(
              `<h2>Item: ${merch[i].product_name}</h2><h3>Department: ${merch[i].department_name}
              </h3><h3>Price: $${merch[i].price}</h3><h5># Available: ${merch[i].stock_quantity}</h5>
              <h5>Product ID: ${merch[i].id}</h5>`);
      };
  };


  // function that captures user input to search for merch
  const searchmerch = function() {
      $.get(`/api/products`)
      .then(function (merch) {
          console.log(merch);
          productArray = merch.slice();
          render(merch);
      })
  };


  searchmerch();
});


// render function to display data
const render = function (merch) {
  for(let i = 0; i < merch.length; i++){
      $('#searchDump').append(`<h1>${merch[i].product_name}</h1><h4>${merch[i].id}</h4>`);
  };
};


// function that captures user input to search for merch
const searchmerch = function (event) {
  event.preventDefault();
  const product_name = $('#searchKeyWord').val()


  $.get(`/api/products/${product_name}`)
  .then(function (merch) {
      console.log(merch);
      render(merch);
  })
};


// respond to button click
$('#searchSubmit').on('click', searchmerch);