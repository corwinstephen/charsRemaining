/* 
  This is a simple jQuery Plugin for adding a remaining character
  count to any text box.
*/

function updateCount(element, counter_field, max_chars){
  // Generate the expression
  var remaining
  var expression

  remaining = max_chars - $(element).val().length
  expression = [remaining, "characters remaining"].join(" ")
  counter_field.html(expression)
}

(function($) {
  $.fn.charsRemaining = function(options) {
    var settings = $.extend({
      maxLength: 200
    }, options);

    return this.each(function(){
      $(this).attr({
        maxlength: settings.maxLength
      })

      // Create a div to stick the counter in
      var counter_field = $('<div class="chars-remaining">')
      $(this).after(counter_field)

      // Update the count
      updateCount(this, counter_field, settings.maxLength);
      $(this).keyup(function(){
        updateCount(this, counter_field, settings.maxLength);
      })

    })
  };
})( jQuery );