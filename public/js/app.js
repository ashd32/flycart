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
  const searchMerch = function() {
      $.get(`/api/products`)
      .then(function (merch) {
          console.log(merch);
          productArray = merch.slice();
          render(merch);
      })
  };

  searchMerch();
});


// render function to display data
const render = function (merch) {
  for(let i = 0; i < merch.length; i++){
      $('#searchDump').append(`<h1>${merch[i].product_name}</h1><h4>${merch[i].id}</h4>`);
  };
};


    // function that captures user input to search for merch
    const searchMerch = function (event) {
        event.preventDefault();
        console.log('searching works!');
        const category = $('#userInputCategory').val();
        // window.location.replace("/products?category=" + category);

        $.get(`/api/products/${product_name}`)
        .then(function (merch) {
            console.log(merch);
            render(merch);
        })
    };
    $('#searchSubmit').on('click', searchMerch);




    $.get(`/api/products/${searchTerm}`)
    .then(function (merch) {
        $("#spinner").hide();
        for (let i = 0; i < merch.length; i++) {
            if (searchLocation === merch[i].User.city) {
                console.log(merch[i]);
                render(merch[i]);
            }
        }
    })

searchMerch();

// respond to button click
$('#searchSubmit').on('click', searchMerch);















let flyCart = [];
//this is the function to render all items in a database.
const renderItems = function(items) {
  items.forEach(function(item) {
    let newProduct = $(` <tr>
          <td class="id">${item.id}</td>
          <td class="product_name">${item.product_name}</td>
          <td class="department_name">${item.department_name}</td>
          <td class="price">${item.price}</td>
          <td class="stock_quantity">${item.stock_quantity}</td>
          <td class="quantity"><input class="buy1" id="input"></td>
          <td><button type="button" class="btn btn-info">Add to Cart</button><td>
        </tr>`);
    $(".tbodypage").append(newProduct);
  });
};

const clearInput = function() {
  console.warn("in clear input");
  $("#input").val("");
};

// const validate = function(item) {
//   if (item.incart.padStart(4,0) > item.instock.padStart(4,0)) {
//     $(".alert").removeClass("hide");
//     clearInput();
//   } else if (isNaN(item.incart)){
//     $(".alert").removeClass("hide");
//     clearInput();
//   }
//   else {
//     flyCart.push(item);
//     clearInput();
//   }
// };



// //this is the document ready function that says to render all the items in the database, to the table.
// $(document).ready(() => {
//   $.ajax({
//     url: "/api/products",
//     type: "GET"
//   }).then(function(rows) {
//     renderItems(rows);
//   });
//   //this says when the add to cart button is clicked, to then add the data to the array.
//   $(".table-body").on("click", ".btn", function() {
//     $(".alert").addClass("hide");
//     const item = {
//       id: $(this)
//         .parents("tr")
//         .find(".id")
//         .text(),
//       name: $(this)
//         .parents("tr")
//         .find(".product_name")
//         .text(),
//       department: $(this)
//         .parents("tr")
//         .find(".department_name")
//         .text(),
//       price: $(this)
//         .parents("tr")
//         .find(".price")
//         .text(),
//       instock: $(this)
//         .parents("tr")
//         .find(".stock_quantity")
//         .text(),
//       incart: $(this)
//         .parents("tr")
//         .find(".buy1")
//         .val()
//     };

//     validate(item);
   

//     console.table(flyCart);
//   });

//   $(".btncart").on("click", function() {
//     $(".modal-body").empty();

//     $('.modal-body').append (`  <table class="table">
//     <thead class="thead-dark">
//       <tr>
//         <th scope="col">Product Id</th>
//         <th scope="col">Product Name</th>
//         <th scope="col">Department</th>
//         <th scope="col">Cost (USD)</th>
//         <th scope="col">Quanity</th>
//       </tr>
//     </thead>
//     <tbody class="tbodymodal table-body"></tbody>
//   </table>
//   <div class="totalCart"></div>`);
//     let totalcost = 0;
//     for (let i = 0; i < flyCart.length; i++) {
//       totalcost += (parseFloat(cart[i].price)*parseFloat(flyCart[i].incart.padStart(3,0)))
//       console.log(flyCart[i]);
//       $(".tbodymodal").append(`<tr>
//     <td class="cartid">${flyCart[i].id}</td>
//           <td class="cart-product_name">${flyCart[i].name}</td>
//           <td class="cart-department_name">${flyCart[i].department}</td>
//           <td class="cart-price">$${flyCart[i].price}</td>
//           <td class="cat-quantity">${flyCart[i].incart}</td>
//           </tr>`);
          
//     }
//     $(".totalCart").empty();
//     $(".totalCart").append(`<h4>TOTAL PRICE:    $${totalcost}</h4>`)
//     $(".modal").modal("show");
//   });

  
// });

// $(".btnPurchase").on("click", function (){
  
//   for(let i=0; i< flyCart.length; i++){
//     const inCartnow = flyCart[i].incart ;
//     const inStocknow = flyCart[i].instock ; 
//     const newStock = function (a,b){
//       return a - b;
//     }
//      stockUpdate= newStock(inStocknow, inCartnow)
//     $.ajax({
//       url: `/api/products/${flyCart[i].id}`,
//       type: "PUT",
//       data: `stock_quantity= ${stockUpdate}`
//     }).then(function(data) {
//       $('.tbodypage').empty();
//       renderItems(data);
//     }).catch(function(data){
//       console.log(data);
//     })
//     $('.modal-body').empty();
//     $('.modal-body').append("Purchase approved!")

//   }
//   flyCart= [];

  $('#userPurchase').submit(function(event){
      event.preventDefault();
    const productId = $('#productId').val();
    const productQuantity = $('#productQuantity').val();
    console.log(productId, productQuantity);  
  })

});