
var n=0;

function slideChange(){
	n++
	postMessage(n);
	setTimeout(slideChange, 1500);
}

slideChange();