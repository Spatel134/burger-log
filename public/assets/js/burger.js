// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-it").on("click", function(event) {
      var id = $(this).data("id");
      var devourIt = $(this).data("devourIt");
  
      var devourState = {
        devour: devourIt
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devourState
      }).then(
        function() {
          console.log("changed burger to", devourIt);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devour: $("[burger_name=devour]:checked").val().trim()
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
  
  });
  