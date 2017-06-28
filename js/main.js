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
  $(".switcher_btn").click(function(){
    $(this).closest(".switcher_control").find(".switcher_btn").removeClass("active");
    $(this).addClass("active");
    var holder = $(this).closest(".switcher").find(".switcher_holder");
    holder.removeClass("active");
    holder.filter('[data-switch-hold='+$(this).data("switch-btn")+']').addClass("active");
    return false;
  });
});
