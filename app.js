$(function() {
  $('#main-input').on('keyup', function(e) {
    $('#main-container').text($('#main-input').val());
  });
  $('.form-main').on('submit', function(event) {
    event.preventDefault();
    const searchTerm = $('#main-input').val();

    console.log(searchTerm);
    $('#main-input').val('')
  })
});
