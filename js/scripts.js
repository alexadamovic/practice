$(document).ready(function() {
  $("li").click(function() {
    $(".card-showing").toggle();
    $(".card-hidden").toggle();
  });
});