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

  // DRAW ITEM
  $('.mn-image').mouseover(function(){
    var parent = $(this).closest('article')[0].classList[4].split('-')[1];
    var modal = '.modal-' + parent;
    var folder = $(this).find('img').attr('src').split('/')[3];
    var number = $(this).find('img').attr('src').split('/')[4].split('.')[0];
    var product = '<img src="../assets/img/' + folder + '/'+ number + '_.png">';
    if($(".modal-" + parent).find('.flex')[0].children.length >= 1){
      $(".modal-" + parent).find('img').remove();
      $(".modal-" + parent).find('.flex').append(product);
    }
    else {
      $(".modal-" + parent).find('.flex').append(product);
    }
  });
});