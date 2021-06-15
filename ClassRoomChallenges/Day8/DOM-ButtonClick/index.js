let team1points = document.getElementById("team1points");
let team2points = document.getElementById("team2points");

console.log(team1points.innerText);
console.log(typeof team1points.innerText);

function initializePoints(){
    team1points.innerText = "0";
}

function team1Add(){
    let points = team1points.innerText;
    points = Number(points) + 1; //can also do +points + 1
    team1points.innerText = points;
}

function team1Sub(){
    let points = team1points.innerText;
    if(points !== "0"){
        points = Number(points) - 1;
        team1points.innerText = points;
    }
}

function initializePoints(){
    team2points.innerText = "0";
}

function team2Add(){
    let points = team2points.innerText;
    points = Number(points) + 1;
    team2points.innerText = points;
}

function team2Sub(){
    let points = team2points.innerText;
    if(points !== "0"){
        points = Number(points) - 1;
        team2points.innerText = points;
    }
}

initializePoints();