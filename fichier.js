function demarrage()
{
	function RandomInt(x){
		return Math.floor(Math.random()*Math.floor(x));
	}
	var x = parseFloat(document.getElementById("x").innerHTML),
	R1 = RandomInt(x+1),
	G1 = RandomInt(x+1),
	B1 = RandomInt(x+1),
	R2 = RandomInt(x+1),
	G2 = RandomInt(x+1),
	B2 = RandomInt(x+1),
	R3 = RandomInt(x+1),
	G3 = RandomInt(x+1),
	B3 = RandomInt(x+1),
	Rx1 = x,
	Gx1 = x,
	Bx1 = x,
	Rx2 = x,
	Gx2 = x,
	Bx2 = x,
	Rx3 = x,
	Gx3 = x,
	Bx3 = x;
	
document.getElementById("Rx1").innerHTML = Rx1;
document.getElementById("Gx1").innerHTML = Gx1;
document.getElementById("Bx1").innerHTML = Bx1;
document.getElementById("Rx2").innerHTML = Rx2;
document.getElementById("Gx2").innerHTML = Gx2;
document.getElementById("Bx2").innerHTML = Bx2;
document.getElementById("Rx3").innerHTML = Rx3;
document.getElementById("Gx3").innerHTML = Gx3;
document.getElementById("Bx3").innerHTML = Bx3;
document.getElementById("Nombre1").innerHTML = x;
document.getElementById("Nombre2").innerHTML = x;
document.getElementById("Nombre3").innerHTML = x;

document.getElementById("R").innerHTML = x-Rx1;
document.getElementById("G").innerHTML = x-Gx1;
document.getElementById("B").innerHTML = x-Bx1;

document.getElementById("coup").innerHTML = 0;
document.getElementById("time").innerHTML = Date.now();



	document.getElementById("Colonne").innerHTML = 1;
	document.getElementById("colorx1").style.border = "solid";
	document.getElementById("colorx2").style.border = "0.5px solid";
	document.getElementById("colorx3").style.border = "0.5px solid";
	
	while(R1==Rx1 && G1==Gx1 && B1==Bx1) {
		R1 = RandomInt(x+1);
		G1 = RandomInt(x+1);
		B1 = RandomInt(x+1);
	}
	
	while(R2==Rx2 && G2==Gx2 && B2==Bx2) {
		R2 = RandomInt(x+1);
		G2 = RandomInt(x+1);
		B2 = RandomInt(x+1);
	}
	
	while(R3==Rx3 && G3==Gx3 && B3==Bx3) {
		R3 = RandomInt(x+1);
		G3 = RandomInt(x+1);
		B3 = RandomInt(x+1);
	}

document.getElementById("R1").innerHTML = R1;
document.getElementById("G1").innerHTML = G1;
document.getElementById("B1").innerHTML = B1;

document.getElementById("R2").innerHTML = R2;
document.getElementById("G2").innerHTML = G2;
document.getElementById("B2").innerHTML = B2;

document.getElementById("R3").innerHTML = R3;
document.getElementById("G3").innerHTML = G3;
document.getElementById("B3").innerHTML = B3;

var RGB1 = [Math.floor(255*R1/x),Math.floor(255*G1/x),Math.floor(255*B1/x)],
	RGB2 = [Math.floor(255*R2/x),Math.floor(255*G2/x),Math.floor(255*B2/x)],
	RGB3 = [Math.floor(255*R3/x),Math.floor(255*G3/x),Math.floor(255*B3/x)],
	color1 = 'RGB('+ RGB1[0] + ','+RGB1[1]+','+RGB1[2]+')',
	color2 = 'RGB('+ RGB2[0] + ','+RGB2[1]+','+RGB2[2]+')',
	color3 = 'RGB('+ RGB3[0] + ','+RGB3[1]+','+RGB3[2]+')';

	document.getElementById("color1").style.backgroundColor = color1;
	document.getElementById("color2").style.backgroundColor = color2;
	document.getElementById("color3").style.backgroundColor = color3;
	
	document.getElementById("colorx1").style.backgroundColor = "white";
	document.getElementById("colorx2").style.backgroundColor = "white";
	document.getElementById("colorx3").style.backgroundColor = "white";
	document.getElementById("resultat").innerHTML = "";
}

function selection1 ()
{
	document.getElementById("Colonne").innerHTML = 1;
	document.getElementById("colorx1").style.border = "solid";
	document.getElementById("colorx2").style.border = "0.5px solid";
	document.getElementById("colorx3").style.border = "0.5px solid";
	
	var x = parseFloat(document.getElementById("x").innerHTML),
	Rx1 = parseFloat(document.getElementById("Rx1").innerHTML),
	Gx1 = parseFloat(document.getElementById("Gx1").innerHTML),
	Bx1 = parseFloat(document.getElementById("Bx1").innerHTML);
	
	
document.getElementById("R").innerHTML = x-Rx1;
document.getElementById("G").innerHTML = x-Gx1;
document.getElementById("B").innerHTML = x-Bx1;

}
function selection2 ()
{
	document.getElementById("Colonne").innerHTML = 2;
	document.getElementById("colorx1").style.border = "0.5px solid";
	document.getElementById("colorx2").style.border = "solid";
	document.getElementById("colorx3").style.border = "0.5px solid";
	
		var x = parseFloat(document.getElementById("x").innerHTML),
	Rx2 = parseFloat(document.getElementById("Rx2").innerHTML),
	Gx2 = parseFloat(document.getElementById("Gx2").innerHTML),
	Bx2 = parseFloat(document.getElementById("Bx2").innerHTML);
	
	
document.getElementById("R").innerHTML = x-Rx2;
document.getElementById("G").innerHTML = x-Gx2;
document.getElementById("B").innerHTML = x-Bx2;
}
function selection3 ()
{
	document.getElementById("Colonne").innerHTML = 3;
	document.getElementById("colorx1").style.border = "0.5px solid";
	document.getElementById("colorx2").style.border = "0.5px solid";
	document.getElementById("colorx3").style.border = "solid";
	
	var x = parseFloat(document.getElementById("x").innerHTML),
	Rx3 = parseFloat(document.getElementById("Rx3").innerHTML),
	Gx3 = parseFloat(document.getElementById("Gx3").innerHTML),
	Bx3 = parseFloat(document.getElementById("Bx3").innerHTML);
	
	
document.getElementById("R").innerHTML = x-Rx3;
document.getElementById("G").innerHTML = x-Gx3;
document.getElementById("B").innerHTML = x-Bx3;
	
	
}

function verification()
{
var	R1 = parseFloat(document.getElementById("R1").innerHTML),
	G1 = parseFloat(document.getElementById("G1").innerHTML),
	B1 = parseFloat(document.getElementById("B1").innerHTML),
	R2 = parseFloat(document.getElementById("R2").innerHTML),
	G2 = parseFloat(document.getElementById("G2").innerHTML),
	B2 = parseFloat(document.getElementById("B2").innerHTML),
	R3 = parseFloat(document.getElementById("R3").innerHTML),
	G3 = parseFloat(document.getElementById("G3").innerHTML),
	B3 = parseFloat(document.getElementById("B3").innerHTML),
	
	Rx1 = parseFloat(document.getElementById("Rx1").innerHTML),
	Gx1 = parseFloat(document.getElementById("Gx1").innerHTML),
	Bx1 = parseFloat(document.getElementById("Bx1").innerHTML),
	Rx2 = parseFloat(document.getElementById("Rx2").innerHTML),
	Gx2 = parseFloat(document.getElementById("Gx2").innerHTML),
	Bx2 = parseFloat(document.getElementById("Bx2").innerHTML),
	Rx3 = parseFloat(document.getElementById("Rx3").innerHTML),
	Gx3 = parseFloat(document.getElementById("Gx3").innerHTML),
	Bx3 = parseFloat(document.getElementById("Bx3").innerHTML),
	
	RGB = [R1,R2,R3,G1,G2,G3,B1,B2,B3],
	RGBx = [Rx1,Rx2,Rx3,Gx1,Gx2,Gx3,Bx1,Bx2,Bx3],
	
	Time = Date.now(),
	Time = (Time - parseFloat(document.getElementById("time").innerHTML))/1000,
	coup = parseFloat(document.getElementById("coup").innerHTML);
	

	
	
	if(RGB.join() == RGBx.join()) {
document.getElementById("resultat").innerHTML = "C'est Gagné !</br> en "+ coup + " coups et " + Time.toFixed(0) + " s";
	}
}

function magentap()
{
var	R1 = parseFloat(document.getElementById("R1").innerHTML),
	G1 = parseFloat(document.getElementById("G1").innerHTML),
	B1 = parseFloat(document.getElementById("B1").innerHTML),
	R2 = parseFloat(document.getElementById("R2").innerHTML),
	G2 = parseFloat(document.getElementById("G2").innerHTML),
	B2 = parseFloat(document.getElementById("B2").innerHTML),
	R3 = parseFloat(document.getElementById("R3").innerHTML),
	G3 = parseFloat(document.getElementById("G3").innerHTML),
	B3 = parseFloat(document.getElementById("B3").innerHTML),
	
	Rx1 = parseFloat(document.getElementById("Rx1").innerHTML),
	Gx1 = parseFloat(document.getElementById("Gx1").innerHTML),
	Bx1 = parseFloat(document.getElementById("Bx1").innerHTML),
	Rx2 = parseFloat(document.getElementById("Rx2").innerHTML),
	Gx2 = parseFloat(document.getElementById("Gx2").innerHTML),
	Bx2 = parseFloat(document.getElementById("Bx2").innerHTML),
	Rx3 = parseFloat(document.getElementById("Rx3").innerHTML),
	Gx3 = parseFloat(document.getElementById("Gx3").innerHTML),
	Bx3 = parseFloat(document.getElementById("Bx3").innerHTML),
	
	x = parseFloat(document.getElementById("x").innerHTML),
	Colonne = parseFloat(document.getElementById("Colonne").innerHTML),
	coup = parseFloat(document.getElementById("coup").innerHTML);
	coup = coup + 1;
	document.getElementById("coup").innerHTML = coup;
	
if (Colonne == 1){
	if(Gx1>0) {Gx1=Gx1-1;
	document.getElementById("Gx1").innerHTML = Gx1;
		var RGBx1 = [Math.floor(255*Rx1/x),Math.floor(255*Gx1/x),Math.floor(255*Bx1/x)],
			colorx1 = 'RGB('+ RGBx1[0] + ','+RGBx1[1]+','+RGBx1[2]+')';
			document.getElementById("colorx1").style.backgroundColor = colorx1;
			document.getElementById("R").innerHTML = x-Rx1;
			document.getElementById("G").innerHTML = x-Gx1;
			document.getElementById("B").innerHTML = x-Bx1;
	}
				}

if (Colonne == 2){
	if(Gx2>0) {Gx2=Gx2-1;
	document.getElementById("Gx2").innerHTML = Gx2;
		var RGBx2 = [Math.floor(255*Rx2/x),Math.floor(255*Gx2/x),Math.floor(255*Bx2/x)],
			colorx2 = 'RGB('+ RGBx2[0] + ','+RGBx2[1]+','+RGBx2[2]+')';
			document.getElementById("colorx2").style.backgroundColor = colorx2;
			document.getElementById("R").innerHTML = x-Rx2;
			document.getElementById("G").innerHTML = x-Gx2;
			document.getElementById("B").innerHTML = x-Bx2;
	}
				}
				
if (Colonne == 3){
	if(Gx3>0) {Gx3=Gx3-1;
	document.getElementById("Gx3").innerHTML = Gx3;
		var RGBx3 = [Math.floor(255*Rx3/x),Math.floor(255*Gx3/x),Math.floor(255*Bx3/x)],
			colorx3 = 'RGB('+ RGBx3[0] + ','+RGBx3[1]+','+RGBx3[2]+')';
			document.getElementById("colorx3").style.backgroundColor = colorx3;
			document.getElementById("R").innerHTML = x-Rx3;
			document.getElementById("G").innerHTML = x-Gx3;
			document.getElementById("B").innerHTML = x-Bx3;
	}
				}				
				
				
				
}

function cyanp()
{
var	R1 = parseFloat(document.getElementById("R1").innerHTML),
	G1 = parseFloat(document.getElementById("G1").innerHTML),
	B1 = parseFloat(document.getElementById("B1").innerHTML),
	R2 = parseFloat(document.getElementById("R2").innerHTML),
	G2 = parseFloat(document.getElementById("G2").innerHTML),
	B2 = parseFloat(document.getElementById("B2").innerHTML),
	R3 = parseFloat(document.getElementById("R3").innerHTML),
	G3 = parseFloat(document.getElementById("G3").innerHTML),
	B3 = parseFloat(document.getElementById("B3").innerHTML),
	
	Rx1 = parseFloat(document.getElementById("Rx1").innerHTML),
	Gx1 = parseFloat(document.getElementById("Gx1").innerHTML),
	Bx1 = parseFloat(document.getElementById("Bx1").innerHTML),
	Rx2 = parseFloat(document.getElementById("Rx2").innerHTML),
	Gx2 = parseFloat(document.getElementById("Gx2").innerHTML),
	Bx2 = parseFloat(document.getElementById("Bx2").innerHTML),
	Rx3 = parseFloat(document.getElementById("Rx3").innerHTML),
	Gx3 = parseFloat(document.getElementById("Gx3").innerHTML),
	Bx3 = parseFloat(document.getElementById("Bx3").innerHTML),
	
	x = parseFloat(document.getElementById("x").innerHTML),
	Colonne = parseFloat(document.getElementById("Colonne").innerHTML),
	coup = parseFloat(document.getElementById("coup").innerHTML);
	coup = coup + 1;
	document.getElementById("coup").innerHTML = coup;
	
if (Colonne == 1){
	if(Rx1>0) {Rx1=Rx1-1;
	document.getElementById("Rx1").innerHTML = Rx1;
		var RGBx1 = [Math.floor(255*Rx1/x),Math.floor(255*Gx1/x),Math.floor(255*Bx1/x)],
			colorx1 = 'RGB('+ RGBx1[0] + ','+RGBx1[1]+','+RGBx1[2]+')';
			document.getElementById("colorx1").style.backgroundColor = colorx1;
			document.getElementById("R").innerHTML = x-Rx1;
			document.getElementById("G").innerHTML = x-Gx1;
			document.getElementById("B").innerHTML = x-Bx1;
	}
				}

if (Colonne == 2){
	if(Rx2>0) {Rx2=Rx2-1;
	document.getElementById("Rx2").innerHTML = Rx2;
		var RGBx2 = [Math.floor(255*Rx2/x),Math.floor(255*Gx2/x),Math.floor(255*Bx2/x)],
			colorx2 = 'RGB('+ RGBx2[0] + ','+RGBx2[1]+','+RGBx2[2]+')';
			document.getElementById("colorx2").style.backgroundColor = colorx2;
			document.getElementById("R").innerHTML = x-Rx2;
			document.getElementById("G").innerHTML = x-Gx2;
			document.getElementById("B").innerHTML = x-Bx2;
	}
				}
				
if (Colonne == 3){
	if(Rx3>0) {Rx3=Rx3-1;
	document.getElementById("Rx3").innerHTML = Rx3;
		var RGBx3 = [Math.floor(255*Rx3/x),Math.floor(255*Gx3/x),Math.floor(255*Bx3/x)],
			colorx3 = 'RGB('+ RGBx3[0] + ','+RGBx3[1]+','+RGBx3[2]+')';
			document.getElementById("colorx3").style.backgroundColor = colorx3;
			document.getElementById("R").innerHTML = x-Rx3;
			document.getElementById("G").innerHTML = x-Gx3;
			document.getElementById("B").innerHTML = x-Bx3;
	}
				}
}

function jaunep()
{
var	R1 = parseFloat(document.getElementById("R1").innerHTML),
	G1 = parseFloat(document.getElementById("G1").innerHTML),
	B1 = parseFloat(document.getElementById("B1").innerHTML),
	R2 = parseFloat(document.getElementById("R2").innerHTML),
	G2 = parseFloat(document.getElementById("G2").innerHTML),
	B2 = parseFloat(document.getElementById("B2").innerHTML),
	R3 = parseFloat(document.getElementById("R3").innerHTML),
	G3 = parseFloat(document.getElementById("G3").innerHTML),
	B3 = parseFloat(document.getElementById("B3").innerHTML),
	
	Rx1 = parseFloat(document.getElementById("Rx1").innerHTML),
	Gx1 = parseFloat(document.getElementById("Gx1").innerHTML),
	Bx1 = parseFloat(document.getElementById("Bx1").innerHTML),
	Rx2 = parseFloat(document.getElementById("Rx2").innerHTML),
	Gx2 = parseFloat(document.getElementById("Gx2").innerHTML),
	Bx2 = parseFloat(document.getElementById("Bx2").innerHTML),
	Rx3 = parseFloat(document.getElementById("Rx3").innerHTML),
	Gx3 = parseFloat(document.getElementById("Gx3").innerHTML),
	Bx3 = parseFloat(document.getElementById("Bx3").innerHTML),
	
	x = parseFloat(document.getElementById("x").innerHTML),
	Colonne = parseFloat(document.getElementById("Colonne").innerHTML),
	coup = parseFloat(document.getElementById("coup").innerHTML);
	coup = coup + 1;
	document.getElementById("coup").innerHTML = coup;
	
if (Colonne == 1){
	if(Bx1>0) {Bx1=Bx1-1;
	document.getElementById("Bx1").innerHTML = Bx1;
		var RGBx1 = [Math.floor(255*Rx1/x),Math.floor(255*Gx1/x),Math.floor(255*Bx1/x)],
			colorx1 = 'RGB('+ RGBx1[0] + ','+RGBx1[1]+','+RGBx1[2]+')';
			document.getElementById("colorx1").style.backgroundColor = colorx1;
			document.getElementById("R").innerHTML = x-Rx1;
			document.getElementById("G").innerHTML = x-Gx1;
			document.getElementById("B").innerHTML = x-Bx1;
	}
				}

if (Colonne == 2){
	if(Bx2>0) {Bx2=Bx2-1;
	document.getElementById("Bx2").innerHTML = Bx2;
		var RGBx2 = [Math.floor(255*Rx2/x),Math.floor(255*Gx2/x),Math.floor(255*Bx2/x)],
			colorx2 = 'RGB('+ RGBx2[0] + ','+RGBx2[1]+','+RGBx2[2]+')';
			document.getElementById("colorx2").style.backgroundColor = colorx2;
			document.getElementById("R").innerHTML = x-Rx2;
			document.getElementById("G").innerHTML = x-Gx2;
			document.getElementById("B").innerHTML = x-Bx2;
	}
				}
				
if (Colonne == 3){
	if(Bx3>0) {Bx3=Bx3-1;
	document.getElementById("Bx3").innerHTML = Bx3;
		var RGBx3 = [Math.floor(255*Rx3/x),Math.floor(255*Gx3/x),Math.floor(255*Bx3/x)],
			colorx3 = 'RGB('+ RGBx3[0] + ','+RGBx3[1]+','+RGBx3[2]+')';
			document.getElementById("colorx3").style.backgroundColor = colorx3;
			document.getElementById("R").innerHTML = x-Rx3;
			document.getElementById("G").innerHTML = x-Gx3;
			document.getElementById("B").innerHTML = x-Bx3;
	}
				}
}

function magentam()
{
var	R1 = parseFloat(document.getElementById("R1").innerHTML),
	G1 = parseFloat(document.getElementById("G1").innerHTML),
	B1 = parseFloat(document.getElementById("B1").innerHTML),
	R2 = parseFloat(document.getElementById("R2").innerHTML),
	G2 = parseFloat(document.getElementById("G2").innerHTML),
	B2 = parseFloat(document.getElementById("B2").innerHTML),
	R3 = parseFloat(document.getElementById("R3").innerHTML),
	G3 = parseFloat(document.getElementById("G3").innerHTML),
	B3 = parseFloat(document.getElementById("B3").innerHTML),
	
	Rx1 = parseFloat(document.getElementById("Rx1").innerHTML),
	Gx1 = parseFloat(document.getElementById("Gx1").innerHTML),
	Bx1 = parseFloat(document.getElementById("Bx1").innerHTML),
	Rx2 = parseFloat(document.getElementById("Rx2").innerHTML),
	Gx2 = parseFloat(document.getElementById("Gx2").innerHTML),
	Bx2 = parseFloat(document.getElementById("Bx2").innerHTML),
	Rx3 = parseFloat(document.getElementById("Rx3").innerHTML),
	Gx3 = parseFloat(document.getElementById("Gx3").innerHTML),
	Bx3 = parseFloat(document.getElementById("Bx3").innerHTML),
	
	x = parseFloat(document.getElementById("x").innerHTML),
	Colonne = parseFloat(document.getElementById("Colonne").innerHTML),
	coup = parseFloat(document.getElementById("coup").innerHTML);
	coup = coup + 1;
	document.getElementById("coup").innerHTML = coup;
	
if (Colonne == 1){
	if(Gx1<x) {Gx1=Gx1+1;
	document.getElementById("Gx1").innerHTML = Gx1;
		var RGBx1 = [Math.floor(255*Rx1/x),Math.floor(255*Gx1/x),Math.floor(255*Bx1/x)],
			colorx1 = 'RGB('+ RGBx1[0] + ','+RGBx1[1]+','+RGBx1[2]+')';
			document.getElementById("colorx1").style.backgroundColor = colorx1;
			document.getElementById("R").innerHTML = x-Rx1;
			document.getElementById("G").innerHTML = x-Gx1;
			document.getElementById("B").innerHTML = x-Bx1;
	}
				}

if (Colonne == 2){
	if(Gx2<x) {Gx2=Gx2+1;
	document.getElementById("Gx2").innerHTML = Gx2;
		var RGBx2 = [Math.floor(255*Rx2/x),Math.floor(255*Gx2/x),Math.floor(255*Bx2/x)],
			colorx2 = 'RGB('+ RGBx2[0] + ','+RGBx2[1]+','+RGBx2[2]+')';
			document.getElementById("colorx2").style.backgroundColor = colorx2;
			document.getElementById("R").innerHTML = x-Rx2;
			document.getElementById("G").innerHTML = x-Gx2;
			document.getElementById("B").innerHTML = x-Bx2;
	}
				}
				
if (Colonne == 3){
	if(Gx3<x) {Gx3=Gx3+1;
	document.getElementById("Gx3").innerHTML = Gx3;
		var RGBx3 = [Math.floor(255*Rx3/x),Math.floor(255*Gx3/x),Math.floor(255*Bx3/x)],
			colorx3 = 'RGB('+ RGBx3[0] + ','+RGBx3[1]+','+RGBx3[2]+')';
			document.getElementById("colorx3").style.backgroundColor = colorx3;
			document.getElementById("R").innerHTML = x-Rx3;
			document.getElementById("G").innerHTML = x-Gx3;
			document.getElementById("B").innerHTML = x-Bx3;
	}
				}				
				
				
				
}

function cyanm()
{
var	R1 = parseFloat(document.getElementById("R1").innerHTML),
	G1 = parseFloat(document.getElementById("G1").innerHTML),
	B1 = parseFloat(document.getElementById("B1").innerHTML),
	R2 = parseFloat(document.getElementById("R2").innerHTML),
	G2 = parseFloat(document.getElementById("G2").innerHTML),
	B2 = parseFloat(document.getElementById("B2").innerHTML),
	R3 = parseFloat(document.getElementById("R3").innerHTML),
	G3 = parseFloat(document.getElementById("G3").innerHTML),
	B3 = parseFloat(document.getElementById("B3").innerHTML),
	
	Rx1 = parseFloat(document.getElementById("Rx1").innerHTML),
	Gx1 = parseFloat(document.getElementById("Gx1").innerHTML),
	Bx1 = parseFloat(document.getElementById("Bx1").innerHTML),
	Rx2 = parseFloat(document.getElementById("Rx2").innerHTML),
	Gx2 = parseFloat(document.getElementById("Gx2").innerHTML),
	Bx2 = parseFloat(document.getElementById("Bx2").innerHTML),
	Rx3 = parseFloat(document.getElementById("Rx3").innerHTML),
	Gx3 = parseFloat(document.getElementById("Gx3").innerHTML),
	Bx3 = parseFloat(document.getElementById("Bx3").innerHTML),
	
	x = parseFloat(document.getElementById("x").innerHTML),
	Colonne = parseFloat(document.getElementById("Colonne").innerHTML),
	coup = parseFloat(document.getElementById("coup").innerHTML);
	coup = coup + 1;
	document.getElementById("coup").innerHTML = coup;
	
if (Colonne == 1){
	if(Rx1<x) {Rx1=Rx1+1;
	document.getElementById("Rx1").innerHTML = Rx1;
		var RGBx1 = [Math.floor(255*Rx1/x),Math.floor(255*Gx1/x),Math.floor(255*Bx1/x)],
			colorx1 = 'RGB('+ RGBx1[0] + ','+RGBx1[1]+','+RGBx1[2]+')';
			document.getElementById("colorx1").style.backgroundColor = colorx1;
			document.getElementById("R").innerHTML = x-Rx1;
			document.getElementById("G").innerHTML = x-Gx1;
			document.getElementById("B").innerHTML = x-Bx1;
	}
				}

if (Colonne == 2){
	if(Rx2<x) {Rx2=Rx2+1;
	document.getElementById("Rx2").innerHTML = Rx2;
		var RGBx2 = [Math.floor(255*Rx2/x),Math.floor(255*Gx2/x),Math.floor(255*Bx2/x)],
			colorx2 = 'RGB('+ RGBx2[0] + ','+RGBx2[1]+','+RGBx2[2]+')';
			document.getElementById("colorx2").style.backgroundColor = colorx2;
			document.getElementById("R").innerHTML = x-Rx2;
			document.getElementById("G").innerHTML = x-Gx2;
			document.getElementById("B").innerHTML = x-Bx2;
	}
				}
				
if (Colonne == 3){
	if(Rx3<x) {Rx3=Rx3+1;
	document.getElementById("Rx3").innerHTML = Rx3;
		var RGBx3 = [Math.floor(255*Rx3/x),Math.floor(255*Gx3/x),Math.floor(255*Bx3/x)],
			colorx3 = 'RGB('+ RGBx3[0] + ','+RGBx3[1]+','+RGBx3[2]+')';
			document.getElementById("colorx3").style.backgroundColor = colorx3;
			document.getElementById("R").innerHTML = x-Rx3;
			document.getElementById("G").innerHTML = x-Gx3;
			document.getElementById("B").innerHTML = x-Bx3;
	}
				}
}

function jaunem()
{
var	R1 = parseFloat(document.getElementById("R1").innerHTML),
	G1 = parseFloat(document.getElementById("G1").innerHTML),
	B1 = parseFloat(document.getElementById("B1").innerHTML),
	R2 = parseFloat(document.getElementById("R2").innerHTML),
	G2 = parseFloat(document.getElementById("G2").innerHTML),
	B2 = parseFloat(document.getElementById("B2").innerHTML),
	R3 = parseFloat(document.getElementById("R3").innerHTML),
	G3 = parseFloat(document.getElementById("G3").innerHTML),
	B3 = parseFloat(document.getElementById("B3").innerHTML),
	
	Rx1 = parseFloat(document.getElementById("Rx1").innerHTML),
	Gx1 = parseFloat(document.getElementById("Gx1").innerHTML),
	Bx1 = parseFloat(document.getElementById("Bx1").innerHTML),
	Rx2 = parseFloat(document.getElementById("Rx2").innerHTML),
	Gx2 = parseFloat(document.getElementById("Gx2").innerHTML),
	Bx2 = parseFloat(document.getElementById("Bx2").innerHTML),
	Rx3 = parseFloat(document.getElementById("Rx3").innerHTML),
	Gx3 = parseFloat(document.getElementById("Gx3").innerHTML),
	Bx3 = parseFloat(document.getElementById("Bx3").innerHTML),
	
	x = parseFloat(document.getElementById("x").innerHTML),
	Colonne = parseFloat(document.getElementById("Colonne").innerHTML),
	coup = parseFloat(document.getElementById("coup").innerHTML);
	coup = coup + 1;
	document.getElementById("coup").innerHTML = coup;
	
if (Colonne == 1){
	if(Bx1<x) {Bx1=Bx1+1;
	document.getElementById("Bx1").innerHTML = Bx1;
		var RGBx1 = [Math.floor(255*Rx1/x),Math.floor(255*Gx1/x),Math.floor(255*Bx1/x)],
			colorx1 = 'RGB('+ RGBx1[0] + ','+RGBx1[1]+','+RGBx1[2]+')';
			document.getElementById("colorx1").style.backgroundColor = colorx1;
			document.getElementById("R").innerHTML = x-Rx1;
			document.getElementById("G").innerHTML = x-Gx1;
			document.getElementById("B").innerHTML = x-Bx1;
	}
				}

if (Colonne == 2){
	if(Bx2<x) {Bx2=Bx2+1;
	document.getElementById("Bx2").innerHTML = Bx2;
		var RGBx2 = [Math.floor(255*Rx2/x),Math.floor(255*Gx2/x),Math.floor(255*Bx2/x)],
			colorx2 = 'RGB('+ RGBx2[0] + ','+RGBx2[1]+','+RGBx2[2]+')';
			document.getElementById("colorx2").style.backgroundColor = colorx2;
			document.getElementById("R").innerHTML = x-Rx2;
			document.getElementById("G").innerHTML = x-Gx2;
			document.getElementById("B").innerHTML = x-Bx2;
	}
				}
				
if (Colonne == 3){
	if(Bx3<x) {Bx3=Bx3+1;
	document.getElementById("Bx3").innerHTML = Bx3;
		var RGBx3 = [Math.floor(255*Rx3/x),Math.floor(255*Gx3/x),Math.floor(255*Bx3/x)],
			colorx3 = 'RGB('+ RGBx3[0] + ','+RGBx3[1]+','+RGBx3[2]+')';
			document.getElementById("colorx3").style.backgroundColor = colorx3;
			document.getElementById("R").innerHTML = x-Rx3;
			document.getElementById("G").innerHTML = x-Gx3;
			document.getElementById("B").innerHTML = x-Bx3;
	}
				}
}