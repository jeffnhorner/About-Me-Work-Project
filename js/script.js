$(document).ready(function() {
  $("#scroll-down-btn").on('click', function() {
    $("html, body").animate({scrollTop: $("#aboutme").offset().top}, 700);
  });
});

