function palindrome(myString){
    var input = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    var reversedinput = input.split("").reverse().join("");
    if(input === reversedinput){
        alert(myString + " is a palindrome");
    }
    else{
        alert(myString + " is not a palindrome");
    }
}
function callmyfunction(){
    palindrome(document.getElementById("yo").value);
}
