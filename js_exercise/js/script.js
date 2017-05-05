$(document).ready(function() { //always do this first. A special event 
  
	//append new element 100 times
	for (i = 0; i < 100; i++) { 
	  $("body").append( "<div class='element' style='transform: rotate(5deg);'></div>" );
	  console.log("element " + i + " added");
	}

	//append new element 100 times
	for (i = 0; i < 200; i++) { 
	  $("body").append( "<div class='element' style='transform: rotate(" + i*5 + "deg);'></div>" );
	  console.log("element " + i + " added");
	}
});