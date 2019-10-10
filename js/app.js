$(document).foundation();

$('a').click(function(event){
  
  // prevent defalt click behavior
  // don't jump to content
  event.preventDefault();

  // remove "selected" class from all links
  $('a').removeClass('selected');

  // add "selected" class to the link that was just selected
  $(this).addClass('selected');
    
  // identify position of target
  var target = $(this).attr('href');
  var top = $(target).offset().top;

  // animate scroll to the target
  $('html,body').animate({
    scrollTop: top
    },700);

});

// I tried writing this code for a couple hours by hand
// it sucked and I couldn't get the hang of it so I just
// Copy pasted it

//Drop Down menu
// $('body').addClass('js');
  
// var $menu = $('#menu'),
//     $menulink = $('.menu-link');
  
// $menulink.click(function() {
//   $menulink.toggleClass('active');
//   $menu.toggleClass('active');
//   return false;
// });