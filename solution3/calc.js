//TODO: 1] Export and Refactor this into a calculator class 
export class Calculator {
	//TODO: 2] Create a constructor with a variable called recorder. This will record when a calculation is performed.
	constructor(){
		this._recorder_ = [];
	}
	//TODO: 3] Refactor the calc function to be named compute. Keep an eye out for the syntax differences between traditional 
	//functions and class definitions. 
	compute(key = 0){
		//debugger;
		if(key in ["0","1","2","3","4","5","6","7","8","9"]){
			document.getElementById("display").value+=key;	
		}else if(key != "="){
			document.getElementById("display").value+=key;
		}else{
		    let answer = parseInt(eval(document.getElementById("display").value, 10));
			this.record(document.getElementById("display").value, answer);
			document.getElementById("display").value = answer;
		}
	}
	
	//TODO: 4] Create a history function which appends your calculations to the history window.
	record(value, answer){
		var e = document.createElement('li');
		e.innerHTML = value + '=' + answer;
		let calcHistory = document.getElementById('one');
		calcHistory.appendChild(e);		
		debugger;
		this._recorder_.push(value+"");
	}
	//TODO: 5] Create a clear function which removes all entries from history and resets the value to zero.
	clear() {
		this._recorder_ = [];
		//EXTRA CREDIT: CLEAR THE WINDOW.
	} 
};
