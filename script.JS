$(document).ready(function() {
  // Hover event
  $('.color-option img').hover(function() {
    var src = $(this).attr('src');
    $('.card-img-top').attr('src', src);
  });

  // Click event
  $('.color-option img').click(function() {
    var src = $(this).attr('src');
    $('.card-img-top').attr('src', src).css('height', '100%').css('width', '100%');
  });
});



localStorage.SetItem('email').value
localStorage.SetItem('password').value
localStorage.SetItem('message').value
