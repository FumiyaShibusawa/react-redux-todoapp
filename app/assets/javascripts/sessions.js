// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

setModalPosition = function() {
  $login_form = $(".login-form");
  $login_form
  .css("top", ((window.innerHeight - $login_form.innerHeight()) / 2) - 66)
  .css("left", (window.innerWidth - $login_form.innerWidth()) / 2)
}

$(function() {
  $('[data-modal="popup"]').on("click", function(e) {
    e.stopPropagation();
    $(".modal").toggle();
    setModalPosition();
  });

  const csrfToken = $("meta[name='csrf-token']")[0].content;
  $("input[name='authenticity_token']").val(csrfToken);

  $(window).on("resize", function() {
    setModalPosition();
  });

  $(".modal-overlay").on("click", function() {
    $(".modal").toggle();
  });
});
