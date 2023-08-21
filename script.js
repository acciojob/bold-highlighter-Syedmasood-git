function highlight() {
    //Write your code here
let bold=document.querySelectorAll("p strong");
	for(let i=0;i<=bold.length;i++){
		bold[i].style.color="green";
	}
}


function return_normal() {
    //Write your code here
let boldWords = document.querySelectorAll("p strong");
    for (var i = 0; i < boldWords.length; i++) {
        boldWords[i].style.color = "black";
    }
    
}
