//TODO: 1] Create an calculator function that computes the math equation. -->
var calculator = {
   /*
	* Algorithm:
	* Check if the key is a number and treat the input as a string. Concatenate the values to themselves as a string.
	* If the key isn't equals, concatenate the display value to itself with the key passed in.
	* If the key is equal, evaluate the string and save the result to the display 
	*/
	calc: function(key){
		//debugger;
		if(key in ["0","1","2","3","4","5","6","7","8","9"]){
			document.getElementById("display").value+=key;	
		}else if(key != "="){
			document.getElementById("display").value+=key;
		}else{
			document.getElementById("display").value = eval(document.getElementById("display").value);
		}
	},

};