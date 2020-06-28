$(function(){
  $('h1').hide();
  $('h1').fadeIn(3000,function(){
    $(this).fadeOut('slow').hide();
    $(this).fadeIn(2000).text("My Portfolio");
  });
});
