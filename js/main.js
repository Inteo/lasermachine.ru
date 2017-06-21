$(document).ready(function() {
  $(".scrollToggle_trig").click(function(){
    $(this).closest(".scrollToggle").find(".scrollToggle_content").addClass("active");
    $(this).hide();
    return false;
  });
  $(".header_menu-ham").click(function(){
    $(this).closest(".header_menu").toggleClass("active");
    return false;
  });
});
