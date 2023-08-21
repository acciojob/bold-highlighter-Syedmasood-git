function highlight() {
    var boldWords = document.querySelectorAll("p strong");
    boldWords.forEach(function(boldWord) {
        boldWord.style.color = "green";
    });
}

function return_normal() {
    var boldWords = document.querySelectorAll("p strong");
    boldWords.forEach(function(boldWord) {
        boldWord.style.color = "black";
    });
}
