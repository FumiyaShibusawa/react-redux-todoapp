// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
setMainHeight = function() {
  headerHeight = $("header").outerHeight();
  mainHeight = window.innerHeight - headerHeight;
  $("main").css("height", mainHeight);
}

$(function() {
  setMainHeight();
  $(window).on('resize', function() {
    setMainHeight();
  })
})
