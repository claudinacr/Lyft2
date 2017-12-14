$(document).ready(function () {
  var codigo = 0;
  $('#btn-next').prop('disabled', true);
  $('#btn-nextver').prop('disabled', true);
  $('#btn-nextsign').prop('disabled', true);

  setTimeout(function () {
    $('#splash').fadeOut(500);
  }, 600);
  $('#btn-signup').click(function () {
    $(".footButtons").fadeOut(500);
    $(".signupForm").fadeIn(600);
    $(".logo").fadeOut();

  });


  $('#btn-returnsign').click(function () {
    $(".signupForm").fadeOut(400);
    $(".footButtons").fadeIn(500);
    $(".logo").fadeIn();


  });

  $(".dropdown-menu li a").click(function () {

    $(".dropdown-toggle").text($(this).children('img').attr("alt"));
    $(".dropdown-toggle").val($(this).children('img').attr("alt"));

  });


  $('#input-phone').keyup(function () {

    var mobNum = $(this).val();
    var filter = /^\d*(?:\.\d{1,2})?$/;

    if (filter.test(mobNum) && $('.dropdown-toggle').val() != '') {
      if (mobNum.length == 10) {
        // alert("valid");

        $('#btn-next').prop('disabled', false);
      } else {
        // alert('Please put 10  digit mobile number');
        $('#btn-next').prop('disabled', true);
      }
    } else {
      $('#btn-next').prop('disabled', true);

    }
  });


  $('#btn-next').click(function () {

    $('.signupForm').fadeOut(300);
    codigo = Math.floor(Math.random() * 1000);

    $('#codigo').text("LAB-" + codigo);
    $('.codigotexto').fadeIn(400);

  });



  $('#btn-okcodigo').click(function () {

    $('.codigotexto').fadeOut(400);
    $('.verifyform').fadeIn(500);

  });

  $('#btn-returnsign2').click(function () {
    $(".verifyform").fadeOut(400);
    $(".signupForm").fadeIn(500);

  });

  $('#btn-resend').click(function () {

    $('.verifyform').fadeOut(300);
    codigo = Math.floor(Math.random() * 1000);

    $('#codigo').text("LAB-" + codigo);
    $('.codigotexto').fadeIn(400);

  });



  $('#input-code').keyup(function () {
    if ($(this).val() != codigo) {
      $('#btn-nextver').prop('disabled', true);

    } else {
      $('#btn-nextver').prop('disabled', false);
    }
  });

  $('#btn-nextver').click(function () {

    $('.verifyform').fadeOut(400);
    $('.signupform2').fadeIn(500);

  });

  $('#btn-returnsign3').click(function () {
    $('.signupform2').fadeOut(400);
    $('.verifyform').fadeIn(500);

  });



  $('.signupform2 input').blur(function () {
    if (!this.value) {
      $('#btn-nextsign').prop('disabled', true);

    } else {
      $('#btn-nextsign').prop('disabled', false);
    }
  });


  $('#btn-nextsign').click(function () {
    $('.signupform2').fadeOut(400);
    $('#finalscreen').fadeIn(500);


  });







});