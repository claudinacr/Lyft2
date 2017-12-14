$(document).ready(function () {
  $('#agregar').click(function () {
    //creacion de una variable comentario que es igual a
    //id del textarea
    var nombre = $('#nombre').val();
    var telefono = $('#telefono').val();

    $('#nombre').val("");
    $('#telefono').val("");
    //#cont es el id del contenedor que contendrá el comentario
    var contenedor = $('.boxContainer');
    contenedor.append('<div>' + '<h3>' + nombre + '</h3>' + '<p>' + telefono + '</p>' + '<i class= "fa fa-trash trash" id="eraser">' + '</i>');
  });
  $('#eraser').click(function () {
    contenedor.remove();
  });
});