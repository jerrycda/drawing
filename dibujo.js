var d = document.getElementById("drawing");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var y1, x1, y2, x2;
var colore = "#FAA";

for(l = 0; l < lineas; l++)
{
	y1 = 10 * l; 
	x1 = 10 * (l + 1);
	dibujarLinea(colore, 0, y1, x1, 300);
	y2 = 10 * l; 
	x2 = 10 * (l + 1);
	dibujarLinea(colore, y2, 0, 300, x2);

}

dibujarLinea (colore, 1,1,1,299);
dibujarLinea (colore, 1,299,299,299);
dibujarLinea (colore, 299,1,1,1);
dibujarLinea (colore, 299,299,299,1);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}