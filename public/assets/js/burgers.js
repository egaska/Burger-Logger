// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevoured");
      
    var newState = {
        devoured: newDevour
      };
    
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState,
    }).then(function () {
      console.log("You ate this burger: ", newDevour);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burgerId").val().trim(),
      devoured: 1,
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("Order up!");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
