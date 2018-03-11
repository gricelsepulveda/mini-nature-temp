$(document).ready(function() {
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

  $( "li.showcase-color" ).click(function() {
    $('.original').fadeOut("fast");
    var currentProduct = $(this).find("img").parent()[0].classList[1].match(/\d+$/)[0];
    var open = ".showcase-space-"+currentProduct
    $('.replace-space').fadeOut("fast");
    $(open).fadeIn("slow");
    console.log(open);
  });

  $(".showcase").mouseout(function() {
    $('.replace-space').fadeOut("fast");
    $('.original').fadeIn("slow");
  });

}); 