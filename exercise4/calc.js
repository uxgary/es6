//TODO: 1] Refactor this into a calculator class 
var calculator = {	
	calc: function(key = 0){
		debugger;
		if(key in ["0","1","2","3","4","5","6","7","8","9"]){
			document.getElementById("display").value+=key;	
		}else if(key != "="){
			document.getElementById("display").value+=key;
		}else{
			document.getElementById("display").value = eval(document.getElementById("display").value);
		}
	},
	//TODO: 2] Create a clear function which removes all entries from history and resets the value to zero.

};

//TOD: 3] EXPORT THE CLASS AS A VARIABLE CALLED container
