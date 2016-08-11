$(function() {
  // SETUP
  var $list, $newItemForm, $newItemButton;
  var item = '';                                  // Item is an empty string
  $list = $('ul');                                // Cache the unordered list
  $newItemForm = $('#newItemForm');               // Cache form to add new items
  $newItemButton = $('#newItemButton');           // Cache button to show form

  $('li').hide().each(function(index) {           // Hide list items
    $(this).delay(450 * index).fadeIn(1600);      // Fade them in individually
  });

  // ITEM COUNTER
  function updateCount() {                        // Declare function
    var items = $('li[class!=complete]').length;  // Number of items in list
    $('#counter').text(items);                    // Set text in counter circle
  }
  updateCount();                                  // Call the function

  // SETUP FORM FOR NEW ITEMS
  $newItemButton.show();                          // Show the button
  $newItemForm.hide();                            // Hide the form
  $('#showForm').on('click', function() {         // When new item clicked
    $newItemButton.hide();                        // Hide the button
    $newItemForm.show();                          // Show the form
  })

  // ADDING A NEW LIST ITEM
  $newItemForm.on('submit', function(e) {         // When a new item is submitted
    e.preventDefault();                           // Prevent form being submitted
    var text = $('input:text').val();             // Get value of text input
    $list.append('<li>' + text + '</li>');        // Add item to end of list
    $('input:text').val('');                      // Empty the text input
    updateCount();                                // Update the count
  });

  // CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT
  $list.on('click', 'li', function() {
    var $this = $(this);                          // Cache the element
    var complete = $this.hasClass('complete');    // Is item complete

    if (complete === true) {                      // Check if item is complete
      $this.animate({                             // If so, animate opacity + padding
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 500, 'swing', function() {               // Use callback when animation completes
        $this.remove();                           // Then completely remove this item
      });
    } else {                                      // Otherwise indicate it is complete
      item = $this.text();                        // Get the text from the list item
      $this.remove();                             // Remove the list item
      $list                                       // Add back to end of list as complete
        .append('<li class=\"complete\">' + item + '</li>')
        .hide().fadeIn(300);                      // Hide is and fade in
      updateCount();                              // Update the counter
    }                                             // End of else option
  });                                             // End of event handler

});
