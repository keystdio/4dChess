function doSomeMath(){
	var place = document.getElementById("mathy");
	var h1 = document.createElement("p");
	h1.style.fontSize = "16pt";
	h1.innerHTML = "Possible steps(When placed center, single chess)";
	place.appendChild(h1);

	// var A = [[1,2,3],[4,5,6]];
	// var x = [7,8,9];
	// var result = numeric.dot(A,x);
	// place.innerHTML = result;


	var x0 = 4;
	var y0 = 4;

	var x = [x0,y0];
	var xT = numeric.exp(x);
	var doables = new Array();
/*
	// a Rook at point (4,4), horizontal and vertical i steps;

	for(var i=-7;i<=7;i++){
		if(i===0) continue; // skip the one that's not moving

		var ele = Math.exp(i);
		var Ahori = [[ele,0],[0,1]];
		var Avert = [[1,0],[0,ele]];

		var xEH = numeric.log(numeric.dot(Ahori,xT));
		var xEV = numeric.log(numeric.dot(Avert,xT));
		if(xEH[0]<9&&xEH[0]>0 && xEH[1]<9&&xEH[1]>0){
			doables.push(xEH);
		}
// 
		if(xEV[0]<9&&xEV[0]>0 && xEV[1]<9&&xEV[1]>0){
			doables.push(xEV);
		}
	} 
*/

/*
	// a Bishop at point (4,4), diagnoally i steps
	for(var i=0;i<=7;i++){
		if(i===0) continue; // skip the one that's not moving

		var eleP = Math.exp(i);  //Positive expotential
		var eleN = Math.exp(-1*i); //Negative expotential

		var A1 = [[eleP,0],[0,eleP]];
		var A2 = [[eleN,0],[0,eleP]];
		var A3 = [[eleP,0],[0,eleN]];
		var A4 = [[eleN,0],[0,eleN]];

		var xE1 = numeric.log(numeric.dot(A1,xT));
		var xE2 = numeric.log(numeric.dot(A2,xT));
		var xE3 = numeric.log(numeric.dot(A3,xT));
		var xE4 = numeric.log(numeric.dot(A4,xT));

		if(xE1[0]<9&&xE1[0]>0 && xE1[1]<9&&xE1[1]>0){
			doables.push(xE1);
		}
		if(xE2[0]<9&&xE2[0]>0 && xE2[1]<9&&xE2[1]>0){
		 	doables.push(xE2);
		}
		if(xE3[0]<9&&xE3[0]>0 && xE3[1]<9&&xE3[1]>0){
			doables.push(xE3);
		}
		if(xE4[0]<9&&xE4[0]>0 && xE4[1]<9&&xE4[1]>0){
			doables.push(xE4);
		}
	}
*/

	var list = document.createElement("ul");
	for(var i=0;i<doables.length;i++){
		var li = document.createElement("li");
		li.innerHTML = doables[i];
		list.appendChild(li);
	}
	place.appendChild(list);
}
	
