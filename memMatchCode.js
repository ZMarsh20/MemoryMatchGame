function setImage(i) {
    var temp = array[i];
    switch(temp) {
        case "1":
            array[i] = "<img style='display:block;' src='ace.png'></img>";
            break;
        case "2":
            array[i] = "<img style='display:block;' src='jack.png'></img>";
            break;
        case "3":
            array[i] = "<img style='display:block;' src='king.png'></img>";
            break;
        case "4":
            array[i] = "<img style='display:block;' src='queen.png'></img>";
            break;
        case "5":
            array[i] = "<img style='display:block;' src='ten.png'></img>";
            break;
        case "6":
            array[i] = "<img style='display:block;' src='joker.ico'></img>";
            break;
      }
}
function nope(){
    hold.innerHTML = '<img style="display:block;" src="white.png"></img>';
    reset.innerHTML = '<img style="display:block;" src="white.png"></img>';
    wait = true;
}
function endGame() {
    if (rights > wrongs) {
        alert("WINNER!!");
    }
    else {
        alert("loser :(");
    }
}function shuffle(n){
    var temp = array[n];
    var swp = Math.floor(Math.random() * 11);
    array[n] = array[swp];
    array[swp] = temp;
}


var array = ["1","1","2","2","3","3","4","4","5","5","6","6"];
for (var x in array) {
    shuffle(x);
}
for (var x in array){
    setImage(x);
}

var second = false;
var wait = true;
var hold;
var reset;
var rights = 0;
var wrongs = 0;
function flip(item) {
    if (wait) {
        var spot = Number(item.id.charAt(3) + item.id.charAt(4));
        item.innerHTML = array[spot];
        if (second){
            if (hold != item){
                if (hold.innerHTML == item.innerHTML){ 
                    rights++;
                    document.getElementById("rights").textContent = rights;
                    if (rights > 5) {
                        setTimeout(endGame,1000);
                    }
                }
                else {
                    wrongs++;
                    document.getElementById("wrongs").textContent = wrongs;
                    reset = item;
                    wait = false;
                    setTimeout(nope,1000);
                }
                second = false;
            }
        }
        else {
            second = true;
            hold = item;
        }
    }
}