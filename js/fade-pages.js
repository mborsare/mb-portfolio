// onextrapixel.com/2010/02/23/how-to-use-jquery-to-make-slick-page-transitions/

$(document).ready(function() {

  $("body").css("display", "none");

  $("body").fadeIn(1000);

  $("a").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(250, redirectPage);
  });

  function redirectPage() {
    window.location = linkLocation;
  }

});
