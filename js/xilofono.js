// Programación de JavaScript

var notas = $(".sonidos");
var notes = [9, 2, 2, 2, 2, 2, 2, 2, 4, 0, 1, 2, 3, 3, 3, 3, 2, 2, 2, 1, 1, 2, 1, 4, 2, 2, 2, 2, 2, 2, 2, 4, 0, 1, 2, 3, 3, 3, 3, 2, 2, 4, 4, 3, 1, 0];
var tempos = [4, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 4, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 4, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 4];

$(".nota").click(function()
{
  let num = parseInt(this.id);
  tocar(num);
});

function tocar(num)
{
  notas[num].pause();
  notas[num].currentTime = 0;
  notas[num].play();
  $("#" + num).css("box-shadow", "0px 0px 10px black");
  setTimeout(function()
{
  $("#" + num).css("box-shadow", "none");
}, 300);
}

$(".boton").click(function()
{
  for (var x = 0; x < notes.length; x++)
  {
    setTimeout(function(y)
    {
      tocar(notes[y]);
    }, ritmo(x) * 350, x);
  }
});

function ritmo(num)
{
  suma = 0;
  for (c = 1; c < num + 1; c++)
  {
    suma = suma + tempos[c - 1];
  }
  return suma;
}
