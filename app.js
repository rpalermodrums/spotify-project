$(function() {
  $('#main-input').on('keyup', function(e) {
    $('#main-container').text($('#main-input').val());
  });
});
