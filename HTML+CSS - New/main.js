$(function() {
  $("#tabs").tabs({
    show: { effect: "blind", direction: "right", duration: 300 }
  });
  $( "#accordion" ).accordion();

  var btn = $('#accordion li a');
  var wrapper = $('#accordion li');

  $(btn).on('click', function() {
    $(btn).removeClass('features-active');
    $(btn).parent().find('.features-addon').removeClass('fadein');
    
    $(this).addClass('features-active');
    $(this).parent().find('.features-addon').addClass('fadein');
  });
});