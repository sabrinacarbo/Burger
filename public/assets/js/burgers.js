// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var devouredBurger = $(this).data("devoured");
  
      var burgerState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerState
      }).then(
        function() {
          console.log("changed sleep to", devouredBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  