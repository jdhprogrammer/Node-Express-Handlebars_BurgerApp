// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-scarf").on("click", function(event) {
        let id = $(this).data("id");
        let newScarf = $(this).data("newscarf");

        let newScarfState = {
            scarfed: newScarf
        };

        // Send the PUT request.
        fetch("/api/burgers/" + id, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newScarfState) // body data type must match "Content-Type" header
        }).then(
            function() {
                console.log("changed scarf to", newScarf);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burg").val().trim(),
            scarfed: $("[name=scarfed]:checked").val().trim()
        };

        // Send the POST request.
        fetch("/api/burgers", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBurger) // body data type must match "Content-Type" header
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event) {
        let id = $(this).data("id");

        // Send the DELETE request.
        fetch("/api/burgers/" + id, {
            method: 'DELETE',
        }).then(
            function() {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});

// $.ajax("/api/burgers/" + id, {
//   type: "PUT",
//   data: newScarfState
// })

//  $.ajax("/api/burgers", {
//    type: "POST",
//    data: newBurger
//  })

// $.ajax("/api/burgers/" + id, {
//   type: "DELETE"
// })