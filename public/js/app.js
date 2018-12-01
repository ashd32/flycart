$(function () {

  /**
   * Get the form info from the page.
   * Clear the form. 
   * Send the data in a POST request.
   */
  const addRequest = function (event) {
    event.preventDefault();


    // Here we grab the form elements
    const newRequest = {
      product_name: $('#reserve-name').val().trim(),
      department_name: $('#reserve-phone').val().trim(),
      price: $('#reserve-email').val().trim(),
      stock_quantity: $('#reserve-unique-id').val().trim()
    };
    console.log(newRequest);


    // Clear the form when submitting
    $('#reserve-name').val('');
    $('#reserve-phone').val('');
    $('#reserve-email').val('');
    $('#reserve-unique-id').val('');

    $.ajax({
      method: 'POST',
      url: 'api/requests',
      data: newRequest
    })
      .then(function () {
        console.log("functions");
        return $.ajax({
          method: 'GET',
          url: 'api/applications'

        }) 
      }).then(function (response) {
        console.log(response);
        var serviceType = newRequest.stock_quantity;
        console.log(response[serviceType]);
      })
   

  } 
    $('.submit').on('click', addRequest)
 
});