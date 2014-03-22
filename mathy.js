function doSomeMath(){
	var place = document.getElementById("mathy");
	var h1 = document.createElement("p");
	h1.style.fontSize = "16pt";
	h1.innerHTML = "Possible steps(When placed center, single chess)";
	place.appendChild(h1);

	chessTutorial()
	// doables.push(pairMoves(x,0,2));

	// display(place,doables);

	// console.log(window.game.boards[0].grid);
	// console.log(window.game.view.tiles);
}

// Each pieces' doables when placed at (4,4)
function chessTutorial(){
	var x0 = 3;
	var y0 = 1;
	var x = [x0,y0];

	var rook = [4,0,4,0,4,0,4,0];
	var bishop = [0,4,0,4,0,4,0,4];
	var queen = [4,4,4,4,4,4,4,4];
	var king = [1,1,1,1,1,1,1,1];

	var doables = analyseDoables(x,bishop);
	
	var place = document.getElementById("mathy");
	display(place,doables);
}

// @x the piece current position
// @list an array containing the maximum steps in that 'index' direction
// return a list of doables step

// ! -- Need to fix duplicates of copies.
function analyseDoables(x,list){
	var doables = new Array();
	for(var dir=0;dir<list.length;dir++){
		var max = list[dir];
		for(var step=1;step<=max;step++){
			doables.push(move(x,dir,step,false));
		}
	}

	return doables;
}

// Make a Move made out of two separate moves. 
// designed for knight's sequential move
// @dir1 direction of the 1st part --> two tiles
// @dir2 direction of the 2nd part --> one tile
// @x initial point
// Exception case: dir1, dir2 has to be 0,2,4,6; or else throw error and return original point;
// return Ending point if within board or is an integer.
function pairMoves(x,dir1,dir2){
	if(dir1%2 != 0 || dir2%2 !=0){
		alert("Invalid input")
		return x;
	}else{
		var A1 = move(x,dir1,2,true);
		var A2 = move(x,dir2,1,true);
	
		var A = numeric.dot(A2,A1); // combined matrix
		

		var xE = numeric.log(numeric.dot(A,numeric.exp(x)));	
		if(xE[0]<9&&xE[0]>0 && xE[1]<9&&xE[1]>0)
			if (xE[0]===parseInt(xE[0]) && xE[1]===parseInt(xE[1])) // Integer verifying.
				return xE;
			else 
				return x;
		else
			return x;
	}
	
}

// make a move in the @dir direction for @step steps from point @x
/* @matrix boolean value,
		return transformation matrix if true
		else return end point
	
	else
		return the ending point if only target is within the board and Is integer
		return the original point if the target is out of board
*/
function move(x,dir,step,matrix){
	var eleP = Math.exp(step);
	var eleN = Math.exp(-1*step);
	var xT = numeric.exp(x);
	switch(dir){
		case 0:
			var A = [[1,0],[0,eleP]];
			break;
		case 1:
			var A = [[eleP,0],[0,eleP]];
			break;
		case 2:
			var A = [[eleP,0],[0,1]];
			break;
		case 3:
			var A = [[eleP,0],[0,eleN]];
			break;
		case 4:
			var A = [[1,0],[0,eleN]];
			break;
		case 5:
			var A = [[eleN,0],[0,eleN]];
			break;
		case 6:
			var A = [[eleN,0],[0,1]];
			break;
		case 7:
			var A = [[eleN,0],[0,eleP]];
			break;
	}
	xE = numeric.log(numeric.dot(A,xT));
	
	if(!matrix){
		if(xE[0]<9&&xE[0]>0 && xE[1]<9&&xE[1]>0)
			if (xE[0]===parseInt(xE[0]) && xE[1]===parseInt(xE[1])) // Integer verifying.
				return xE;
			else 
				return x;
		else
			return x;
	} else {
		return A;
	}
}

// display a list of possibilities in a <ul>
function display(place,doables){
	var list = document.createElement("ul");
	for(var i=0;i<doables.length;i++){
		var li = document.createElement("li");
		li.innerHTML = doables[i];
		list.appendChild(li);
	}
	place.appendChild(list);
}
