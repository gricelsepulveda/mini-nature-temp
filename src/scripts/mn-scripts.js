$(document).ready(function(){
  // ARTICLE I
  $('.article-1 .mn-product-item').mouseover(function(){
    $('.modal-1').fadeIn('fast');
    $('.mn-welcome-message').fadeOut('fast');
  });
  $('.article-1').mouseleave(function(){
    $('.modal-1').fadeOut('fast');
    $('.mn-welcome-message').fadeIn('fast');
  });
  // ARTICLE II
  $('.article-2 .mn-product-item').mouseover(function(){
    $('.modal-2').fadeIn('fast');
    $('.mn-welcome-message').fadeOut('fast');
  });
  $('.article-2').mouseleave(function(){
    $('.modal-2').fadeOut('fast');
    $('.mn-welcome-message').fadeIn('fast');
  });
  // ARTICLE III
  $('.article-3 .mn-product-item').mouseover(function(){
    $('.modal-3').fadeIn('fast');
    $('.mn-welcome-message').fadeOut('fast');
  });
  $('.article-3').mouseleave(function(){
    $('.modal-3').fadeOut('fast');
    $('.mn-welcome-message').fadeIn('fast');
  });
  // ARTICLE IV
  $('.article-4 .mn-product-item').mouseover(function(){
    $('.modal-4').fadeIn('fast');
    $('.mn-welcome-message').fadeOut('fast');
  });
  $('.article-4').mouseleave(function(){
    $('.modal-4').fadeOut('fast');
    $('.mn-welcome-message').fadeIn('fast');
  });
  // ARTICLE V
  $('.article-5 .mn-product-item').mouseover(function(){
    $('.modal-5').fadeIn('fast');
    $('.mn-welcome-message').fadeOut('fast');
  });
  $('.article-5').mouseleave(function(){
    $('.modal-5').fadeOut('fast');
    $('.mn-welcome-message').fadeIn('fast');
  });
  // ARTICLE VI
  $('.article-6 .mn-product-item').mouseover(function(){
    $('.modal-6').fadeIn('fast');
    $('.mn-welcome-message').fadeOut('fast');
  });
  $('.article-6').mouseleave(function(){
    $('.modal-6').fadeOut('fast');
    $('.mn-welcome-message').fadeIn('fast');
  });

  //TEXT CHANGE FUNCTION
  function changeTitle() {
    $.ajax({
        url : "../textos/titulo.txt",
        dataType: "text",
        success : function (data) {
            $("#text-title").html(data);
        }
    })}
  function changeText() {
      $.ajax({
          url : "../textos/descripcion.txt",
          dataType: "text",
          success : function (data) {
              $("#text-description").html(data);
          }
      })}

  changeTitle();
  changeText();

});