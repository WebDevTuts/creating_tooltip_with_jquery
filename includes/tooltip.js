/* JavaScript Document */

$(document).ready(function(){

  $('.tooltip').mouseover(function(e){

    if( $(this).attr('data-tip-type') == 'text' ) {
      $('#tooltip_container').html( $(this).attr('data-tip-source'));
    }

    if( $(this).attr('data-tip-type') == 'html' ) {
      var elementToGet = '#' + $(this).attr('data-tip-source');
      var newHTML = $(elementToGet).html();
      $('#tooltip_container').html( newHTML );
    }

  }).mouse.move(function(e){

  }).mouseout(function(e){

  });

});