# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
setMainHeight = () =>
  headerHeight = $("header").outerHeight()
  mainHeight = window.innerHeight - headerHeight
  $("main").css("height", mainHeight)


$ ->
  setMainHeight()

$(window).on 'resize', () ->
  setMainHeight()
